
import React from 'react';
import '../../../res/css/syner/agent.css';
import '../../../res/css/syner/popWindow.css';
import { ElemAgentPortrait } from './ElemAgent';


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

            <div className='windowLayer'>
                <div className='popWindow agentPop'>
                    <div className='popClose'></div>
                    <div className='popAgentInfo'>
                        <div className='popAgentPic'><img src='/welcome/syner/temp/headpic.jpeg'></img></div>
                        <div className='popAgentIntro'>余世维老师 <span className='miniText'>@scona官方</span></div>
                    </div>
                    <div className='popRow'>
                        选择工作空间
                        <select className='popSelect'>
                            <option>选项一</option>
                            <option>选项二</option>
                        </select>
                    </div>
                    <div className='popRow'>
                        选择工作室
                        <select className='popSelect'>
                            <option>选项一</option>
                            <option>选项二</option>
                        </select>
                    </div>
                    <div className='popBtnDiv'>
                        <span className='normalBtn'>取消</span>
                        <span className='greenBtn'>确认</span>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default ExploreAgent;
