
import React, { useEffect, useState, useRef } from 'react';
import '../../../res/css/syner/aiChat.css';
import { AiChatPageTypeEnum, AiChatUtils } from './utils/AiChatUtils';
import { ConaConfig, AiChatConfig } from './utils/ConaConfig';

interface AIChatPageProps {
    pageType: string;
    pageId: string;
}

const AIChatPage: React.FC<AIChatPageProps> = ({pageType, pageId}) => {
    const [inputText, setInputText] = useState<string>('');
    const [chatHistory, setChatHistory] = useState<Array<{ type: 'user' | 'answer', content: string }>>([]);
    const [currentResponse, setCurrentResponse] = useState<string>('');
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [conaConfig, setConaConfig] = useState<ConaConfig | null>(null);
    const mainContainerRef = useRef<HTMLDivElement>(null);
    // const [hash, setHash] = useState<string>('');

    // 组件加载时, 从sessionStorage中获取问题并发送
    useEffect(() => {
        // 这里的代码会在组件加载（挂载）后执行

        fetch('/cona.config.json')
            .then(response => response.json())
            .then((config: ConaConfig) => {
                setConaConfig(config);
            });

        let question = getSessionStorage('aichat_text')
        if(question) {
            // setInputText(question);
            sendMessage(question);
        }

        return () => {
            // 这里的代码会在组件卸载时执行
        };


    }, []); 

    // 监测 currentResponse 变化，如果变化则滚动到底部
    useEffect(() => {
        scrollToBottom(false);
    }, [chatHistory,currentResponse]); 

    /**
     * 发送问题消息的函数
     * @param question 问题文本
     */
    const sendMessage = async (question:string | null = null) => {
        let question_to_send:string = '';
        if(question) {
            question_to_send = question.trim();
        } else if (inputText.trim() ) {
            question_to_send = inputText.trim();
        }

        if (question_to_send && !isFetching ) {
            scrollToBottom(true);
            setIsFetching(true);
            setChatHistory(prev => [...prev, { type: 'user', content: question_to_send }]); // 用户问题添加进历史记录
            setInputText(''); // 清空输入框

            if( currentResponse ) {
                setChatHistory(prev => [...prev, { type: 'answer', content: currentResponse }]); // 确保上一个响应被添加
                setCurrentResponse(''); // 清空当前响应
            }
    
            try {
                let model_id = AiChatUtils.getModelId(pageType, pageId);
                // const response = await fetch(`http://localhost:8000/aichat/?question=${encodeURIComponent(question_to_send)}&model=${model_id}`);
                // const response = await fetch(`http://synerai.cona.ai/aichat/?question=${encodeURIComponent(question_to_send)}&model=${model_id}`);
                const response = await fetch(AiChatUtils.getAiChatServUrl(conaConfig?.aichat_config.serv_url ?? '', question_to_send, model_id));
                if (!response.body) {
                    throw new Error('Response body is null');
                }
                const reader = response.body.getReader();
                const decoder = new TextDecoder();

                let response_text = '';
                while (true) {
                    const { value, done } = await reader.read();
                    if (done) { 
                        if (response_text) {
                            setCurrentResponse('');
                            setChatHistory(prev => [...prev, { type: 'answer', content: response_text }]); // 添加完整响应
                        }
                        break;
                    }

                    response_text += decoder.decode(value, { stream: true });
                    setCurrentResponse(response_text);

                }

            } catch (error) {
                console.error('请求失败:', error);
            } finally {
                setIsFetching(false);
            }
        }
    };
    

    /**
     * 处理输入框变化的函数
     * @param e 
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value);
    }

    /**
     * 处理回车的函数
     * @param e 
     */
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && inputText.trim() && !isFetching) {
            e.preventDefault();
            sendMessage();
        }
    }

    /**
     * 获取sessionStorage数据，并检查是否过期. 获取之后删除
     * @param key 
     * @returns 
     */
    const getSessionStorage = (key: string) => {
        const itemStr = sessionStorage.getItem(key);
        sessionStorage.removeItem(key);
        if (!itemStr) {
            return null;
        }
        const item = JSON.parse(itemStr);
        const now = new Date();
        if (now.getTime() > item.expiry) {
            return null;
        }
        return item.value;
    }

    /**
     * 将聊天界面滚动到底部
     * @param enforce 是否强制滚动到底部
     */
    const scrollToBottom = (enforce:boolean) => {
        if(mainContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = mainContainerRef.current;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 200;
            if( enforce || isAtBottom ) {
                mainContainerRef.current.scrollTo(0, scrollHeight - clientHeight);
            }
        }
    }

    

    return (
        <div className="aichat_container">

            {pageType === AiChatPageTypeEnum.llm && (
                <div className="chatTopbar">
                <div className='topbarNewchat'>
                        <p className='newText'>{AiChatUtils.getModelId(pageType, pageId)}</p>
                        <div className='rightButton'>
                            <div className='sourceButton'><img src='/welcome/syner/temp/headpic.jpeg'></img>Cona聚合</div>
                        </div>
                    </div>
                </div>
            )}

            {pageType === AiChatPageTypeEnum.agent && (
                <div className="chatTopbar">
                    <div className='partnerDiv'>
                        <div className='goback'></div>
                        <div className='headPic'><img src='/welcome/syner/temp/headpic.jpeg'></img></div>
                        <div className='introText'>
                            <p className='colorText'><span className='boldText'>余世维老师</span> @cona官方</p>
                            <p>我是你们的老朋友余世维，您可以就企业管理、领导力、执行力向我咨询，我将与你一起进步！</p>
                        </div>
                        <div className='addTeam'>
                            <div className='addButton'><span className='joinIcon'></span>添加到团队</div>
                        </div>
                    </div>
                </div>
            )}
            
            <div className='mainContainer' ref={mainContainerRef}>
                <div className='chatContainer' >
                    {chatHistory.map((msg, index) => (
                        <div className='chatRow'> 
                            <div className='chatCon'>
                                <div className='chatPic'><img src={`/welcome/syner/temp/avatar_${msg.type}.jpg`}></img></div>
                                <div className={`${msg.type}Con`}>{msg.content}</div>
                            </div>
                        </div>
                    ))}
                    {currentResponse && currentResponse.length > 0 && (
                        <div className='chatRow'> 
                            <div className='chatCon'>
                                <div className='chatPic'><img src='/welcome/syner/temp/avatar_answer.jpg'></img></div>
                                <div className='answerCon'>{currentResponse}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='chatDiv'>
                <div className='inner'>
                    <div className='chatBox'>
                        <div className='textareaBox'>
                            <textarea 
                                className='antInput' 
                                placeholder='请输入问题，回车发送，Shift+回车换行'
                                value={inputText}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                            ></textarea>
                        </div>
                        <div className='chatButton'>
                            <span className='uploatIcon'></span>
                            <span className='chatIcon'></span>
                            <span 
                                className='sendIcon' 
                                onClick={() => !isFetching && sendMessage()}
                            ></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default AIChatPage;
