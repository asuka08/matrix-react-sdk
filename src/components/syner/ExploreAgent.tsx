
import React from 'react';
import '../../../res/css/syner/agent.css';
import { ElemAgentPortrait } from './DiscoverAgent';


const ExploreAgent: React.FC = () => {
    

    return (
        <div className='agentHome'>
            <h3 className='agentTitle'>找到伙伴</h3>
            <div>
                <span className='selectTag selected'>热门</span>
                <span className='selectTag'>企业管理</span>
                <span className='selectTag'>国学文化</span>
            </div>
            <div className='agentShow'>
                <ElemAgentPortrait
                    bgImageUrl="/welcome/syner/space/agent_title_libai.png"
                    title="李白"
                    description="他的性格特点丰富多变，以高度自负、傲慢"
                    chatCount={1111}
                    auther="讯飞星火"
                    modelId='yushiwei'
                />
                <ElemAgentPortrait
                    bgImageUrl="/welcome/syner/space/agent_title_einstein.png"
                    title="爱因斯坦"
                    description="不但是一个决定聪明的人,而且坚持不懈"
                    chatCount={2222}
                    auther="我是李翔"
                    modelId='yushiwei'
                />
                
            </div> 
        </div>

    );
}

export default ExploreAgent;
