
import React from 'react';
import '../../../res/css/syner/agent.css';

interface DiscoverAgentPortraitProps {
    bgImageUrl: string;
    title: string;
    description: string;
    chatCount: number;
    auther: string;
}

const DiscoverAgentPortrait: React.FC<DiscoverAgentPortraitProps> = ({ bgImageUrl, title, description, chatCount: chatCount, auther:auther }) => {

    return (
        <div className='agentBox'>
            <div className='bgpic'><img src={bgImageUrl}></img></div>
            <div className='viewTag'>{chatCount}</div>
            <div className='agentIntro'>
                <h4>{title}</h4>
                <div className='intro'>{description}</div>
                <p>@{auther}</p>
            </div>
        </div>
    );
}

export default DiscoverAgentPortrait;
