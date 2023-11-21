
import React from 'react';
import '../../../res/css/syner/DiscoverSpace.css';

interface DiscoverSpaceProps {
    bgImageUrl: string;
    avatarUrl: string;
    title: string;
    description: string;
    onlineCount: number;
    memberCount: number;
}


const DiscoverSpace: React.FC<DiscoverSpaceProps> = ({ bgImageUrl, avatarUrl, title, description, onlineCount, memberCount }) => {

    return (
        <div className='spaceItem'>
            <div className='spaceImage'>
                <div className='sapceBgpic'><img src={bgImageUrl}></img></div>
                <div className='headPicture'>
                    <img src={avatarUrl}></img>
                </div>
            </div>
            <div className='spaceContent'>              
                <h4 className='spaceTitle'>{title}</h4>
                <p className='spaceDescription'>{description}</p>
                <div className='spaceMeta'>
                <span className='sapceViews'>{onlineCount}人在线</span>
                <span className='spaceLikes'>{memberCount}位成员</span>
                </div>
            </div>
        </div>
    );
}

export default DiscoverSpace;
