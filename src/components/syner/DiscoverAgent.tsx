
import React from 'react';
import dis from "../../dispatcher/dispatcher";
import { Action } from '../../dispatcher/actions';
import '../../../res/css/syner/DiscoverAgent.css';


const dispatchAichatPage = (page_id:string) => {
    dis.dispatch({ action: Action.ViewAiChatPage, aichat_type: "agent", aichat_id: page_id });
}

interface ElemAgentProps {
    avatarUrl?: string;
    bgImageUrl?: string;
    title: string;
    description: string;
    chatCount: number;
    auther?: string;
    modelId: string;

    // followerCount: number;
    // groupCount: number;
}

const ElemAgent: React.FC<ElemAgentProps> = ({ avatarUrl, title, description, chatCount, modelId }) => {

    const handleAgentClick = () => {dispatchAichatPage(modelId);}

    return (
        <div className='agentItem' onClick={handleAgentClick}>
            <div className='homeIcon1'></div>
            <div className='agentIntroDiv'>
                <img src={avatarUrl} className="agentPicture"/>
                <div className="agentInfo">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="agentStatus">
                <span className='status1'>{chatCount} 对话</span>
                {/* <span className='status2'>{followerCount} 关注</span>
                <span className='status3'>{groupCount} 团队</span> */}
            </div>
            <div className='homeIcon2'></div>
        </div>
    );
}


const ElemAgentPortrait: React.FC<ElemAgentProps> = ({ bgImageUrl, title, description, chatCount, auther, modelId }) => {

    const handleAgentClick = () => {dispatchAichatPage(modelId);}

    return (
        <div className='agentBox' onClick={handleAgentClick}>
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

export default ElemAgent;
export { ElemAgentPortrait };
