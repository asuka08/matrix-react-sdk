
import React from 'react';
import '../../../res/css/syner/DiscoverAgent.css';

interface DiscoverAgentProps {
    avatarUrl: string;
    title: string;
    description: string;
    followerCount: number;
    commentCount: number;
    articleCount: number;
}

const DiscoverAgent: React.FC<DiscoverAgentProps> = ({ avatarUrl, title, description, followerCount, commentCount, articleCount }) => {

    return (
        <div className='agentItem'>
            <div className='homeIcon1'></div>
            <div className='agentIntroDiv'>
                <img src={avatarUrl} className="agentPicture"/>
                <div className="agentInfo">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="agentStatus">
                <span className='status1'>{followerCount} 关注</span>
                <span className='status2'>{commentCount} 评论</span>
                <span className='status3'>{articleCount} 文章</span>
            </div>
            <div className='homeIcon2'></div>
        </div>
    );
}

export default DiscoverAgent;
