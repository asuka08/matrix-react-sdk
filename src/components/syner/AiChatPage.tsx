
import React, { useState } from 'react';
import '../../../res/css/syner/aiChat.css';

const AIChatPage: React.FC = () => {
    const [inputText, setInputText] = useState<string>('');
    const [chatHistory, setChatHistory] = useState<Array<{ type: 'user' | 'answer', content: string }>>([]);
    const [currentResponse, setCurrentResponse] = useState<string>('');
    const [isFetching, setIsFetching] = useState<boolean>(false);

    // 发送问题消息的函数
    const sendMessage = async () => {
        if (inputText.trim() && !isFetching ) {
            setIsFetching(true);
            let question = inputText.trim();
            setChatHistory(prev => [...prev, { type: 'user', content: question }]); // 用户问题添加进历史记录
            setInputText(''); // 清空输入框

            if( currentResponse ) {
                setChatHistory(prev => [...prev, { type: 'answer', content: currentResponse }]); // 确保上一个响应被添加
                setCurrentResponse(''); // 清空当前响应
            }
    
            try {
                let model_id = "debug";
                const response = await fetch(`http://localhost:8000/aichat/?question=${encodeURIComponent(question)}&model=${model_id}`);
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

                    // 将流式响应的每个片段添加到聊天记录
                    // const textChunk = decoder.decode(value, { stream: true });
                    // setCurrentResponse(prevResponse => prevResponse + textChunk);
                }

            } catch (error) {
                console.error('请求失败:', error);
            } finally {
                setIsFetching(false);
            }
        }
    };
    

    // 处理输入框变化的函数
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value);
    }

    // 处理回车的函数
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && inputText.trim() && !isFetching) {
            e.preventDefault();
            sendMessage();
        }
    }

    return (
        <div className="aichat_container">

            <div className="chatTopbar">
               <div className='topbarNewchat'>
                    <p className='newText'>新对话</p>
                    <div className='rightButton'>
                        <div className='sourceButton'><img src='/welcome/syner/temp/headpic.jpeg'></img>Cona聚合</div>
                    </div>
                </div>
            </div>

            <div className='chatContainer'>
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

            <div className='chatDiv'>
                <div className='inner'>
                    <div className='chatBox'>
                        <div className='textareaBox'>
                            <textarea 
                                className='antInput' 
                                placeholder='输入你想了解的内容'
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
