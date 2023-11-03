
import React, { useState } from 'react';
import '../../../res/css/syner/StartAIChat.css';
import syner_logo from '../../../res/img/syner/syner_logo.png';

const StartAIChat: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);

    return (
        <div className="container">
            {/* Logo */}
            <img src={syner_logo} alt="Logo" className="logo" />

            {/* 标题 */}
            <h1 className="title">Collaboration Of New Agent</h1>
            <h2 className="subtitle">用Cona帮忙完成所有有趣的任务 ⚡</h2>

            {/* 搜索框 */}
            <input type="text" placeholder="开始新的聊天" className="searchBox" />

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
