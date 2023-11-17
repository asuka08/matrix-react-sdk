import React from 'react';
import '../../../res/css/syner/chatLeft.css';

const LeftLlmChat: React.FC = () => {

    return (
        <div>
            <div className='leftSearchDiv'>
                <div className='leftSearch'>
                    <input placeholder='搜索历史记录'></input>
                    <div className='leftSearchButton'></div>
                </div>
            </div>
            <div className='recommendList'>
                <div className='recommendItem active'>全部</div>
                <div className='recommendItem'>对话</div>
                <div className='recommendItem'>文档</div>
            </div>
            <div className='leftChatItem current'>
                <span className='docItemIcon'></span>北京小众的露营地.docx
                <div className='leftChatDelete'></div>
            </div>
            <div className='leftChatItem'>
                <span className='chatItemIcon'></span>城市内涝模型有哪些？
                <div className='leftChatDelete'></div>
            </div>
        </div>
    );
}

export default LeftLlmChat;