
import React from 'react';
import '../../../res/css/syner/agent.css';

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
                <div className='agentBox'>
                    <div className='bgpic'><img src='/welcome/syner/temp/agentbg.png'></img></div>
                    <div className='viewTag'>1.6万</div>
                    <div className='agentIntro'>
                        <h4>李白</h4>
                        <div className='intro'>他的性格特点丰富多变，以高度自负、傲慢</div>
                        <p>@讯飞星火</p>
                    </div>
                </div>
                <div className='agentBox'>
                    <div className='bgpic'><img src='/welcome/syner/temp/agentbg.png'></img></div>
                    <div className='viewTag'>3119</div>
                    <div className='agentIntro'>
                        <h4>阿尔伯特·爱因斯坦</h4>
                        <div className='intro'>他的性格特点丰富多变，以高度自负、傲慢</div>
                        <p>@讯飞星火</p>
                    </div>
                </div>
                
            </div> 
        </div>

    );
}

export default ExploreAgent;
