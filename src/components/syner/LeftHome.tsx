import React from 'react';
import '../../../res/css/syner/chatLeft.css';

const LeftHome: React.FC = () => {

    return (
        <div>
            <div className='leftLargeTitle'>
                <div className='title'><span className='welcome_icon'></span>欢迎来到Cona.ai</div>
                <div className='foldButton'></div>
            </div>
            <div className='leftButtonDiv'>
                <div className='newButton'><span className='plusIcon'></span>创建新对话</div>
            </div>
            <div className='definePrompt'>
                <div className='tt'>自定义prompt</div>
                <div className='clickArrow'></div>
            </div>
            <div className='recommendList'>
                <div className='recommendItem active'>全部</div>
                <div className='recommendItem'>我的收藏</div>
                <div className='recommendItem'>自媒体</div>
                <div className='recommendItem'>产品经理</div>
                <div className='recommendItem'>营销策划</div>
                <div className='recommendItem'>技术研发</div>
                <div className='recommendItem'>行政人力</div>
            </div>
            <div className='promptList'>
                <div className='promptListLeft'>
                    <div className='promptItem'>
                        <div className='tt'>公众号文章</div>
                        <div className='text'>撰写个篇公众号文章呼吁领养代替购买，给流浪动物一个家</div>
                        <div className='heatBottom'>
                            <div className='viewNum'>2.56w</div>
                            <div className='editIconButton'></div>
                        </div>
                    </div>

                </div>
                <div className='promptListRight'>
                    <div className='promptItem'>
                        <div className='tt'>双十一配图</div>
                        <div className='text'>画一幅双十一购物节海报配图</div>
                        <div className='heatBottom'>
                            <div className='viewNum'>1.8w</div>
                            <div className='editIconButton'></div>
                        </div>
                    </div> 

                </div>
            </div>
        </div>
    );
}

export default LeftHome;