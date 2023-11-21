
import React, { useState } from 'react';
import dis from "../../dispatcher/dispatcher";
import '../../../res/css/syner/StartAIChat.css';
import syner_logo from '../../../res/img/syner/syner_logo.png';
import { Action } from '../../dispatcher/actions';
import { set } from 'lodash';

const StartAIChat: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);
    const [inputText, setInputText] = useState<string>('');

    // 处理回车键按下函数
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputText.trim() ) {
            e.preventDefault();
            setSessionStorage('aichat_text', inputText, 10);
            dis.dispatch({ action: Action.ViewAiChatPage, aichat_type: "llm" }, true);
        }
    }

    // 处理输入框变化的函数
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    // 设置带有过期时间的数据
    const setSessionStorage = (key: string, value: string, expiryInSec: number) => {
        const now = new Date();
        const item = {
            value: value,
            expiry: now.getTime() + expiryInSec * 1000,
        };
        sessionStorage.setItem(key, JSON.stringify(item));
    }

    return (
        <div className="container">
            {/* Logo */}
            <img src={syner_logo} alt="Logo" className="logo" />

            {/* 标题 */}
            <h1 className="title">Collaboration Of New Agent</h1>
            <h2 className="subtitle">用Cona帮忙完成所有有趣的任务 ⚡</h2>

            {/* 搜索框 */}
            <input type="text" placeholder="开始新的聊天" className="searchBox"
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />

            {/* 选择按钮 */} 
            <div className="iconContainer">
                <button
                    onClick={() => setSelectedButton('button1')}
                    className={selectedButton === 'button1' ? "pillButtonSelected" : "pillButton"}
                >
                    Cona聚合
                </button>
                <button
                    onClick={() => setSelectedButton('button2')}
                    className={selectedButton === 'button2' ? "pillButtonSelected" : "pillButton"}
                >
                    文心一言
                </button>
                <button
                    onClick={() => setSelectedButton('button3')}
                    className={selectedButton === 'button3' ? "pillButtonSelected" : "pillButton"}
                >
                    ChatGLM
                </button>
                {/* 其他按钮... */}
            </div>
        </div>
    );
}

export default StartAIChat;
