
import React from 'react';
import '../../../res/css/syner/DiscoverAgent.css';

const DiscoverAgent: React.FC = () => {

    return (
        <div className='agentItem'>
            <div className='homeIcon1'></div>
            <img src="../../../res/css/img/syner/temp/agentpic.jpeg" alt="User Avatar" className="agentPicture" />
            <div className="agentInfo">
                <h3>余世维老师</h3>
                <p>欢迎来到世维研习社，我是你们的老朋友世维</p>
            </div>
            <div className="agentStatus">
                <span>100w+ 关注</span>
                <span>75 评论</span>
                <span>8 文章</span>
            </div>
            <div className='homeIcon2'></div>
        </div>
    );
}

export default DiscoverAgent;
