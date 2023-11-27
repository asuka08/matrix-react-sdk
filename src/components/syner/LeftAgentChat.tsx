import React from 'react';
import '../../../res/css/syner/agentLeft.css';

const LeftAgentChat: React.FC = () => {

    return (
        <div>
            <div className='leftLargeTitle'>
                <div className='title'><span className='nearby_icon'></span>最近的伙伴</div>
                <div className='foldButton'></div>
            </div>
            <div className='leftPartner current'>
                <div className='leftPartnerPic'><img src="/welcome/syner/temp/agentpic.jpeg"></img></div>
                <div className='intro'>
                <h5>余世维老师</h5>
                <p>您对白酒行业有什么看法</p>
                </div>
                <div className='timeShow'>10:55</div>
                <div className='editButton'><span className='gotop'></span><span className='deleteBtn'></span></div>
            </div>
            <div className='leftPartner'>
                <div className='leftPartnerPic'><img src="/welcome/syner/temp/agentpic.jpeg"></img></div>
                <div className='intro'>
                <h5>马斯克</h5>
                <p>您对白酒行业有什么看法</p>
                </div>
                <div className='timeShow'>10:55</div>
                <div className='editButton'><span className='gotop'></span><span className='deleteBtn'></span></div>
            </div>
        </div>
    );
}

export default LeftAgentChat;