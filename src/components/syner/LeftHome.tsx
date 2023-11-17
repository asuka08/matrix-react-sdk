import React from 'react';
import '../../../res/css/syner/chatLeft.css';

const LeftHome: React.FC = () => {

    return (
        <div>
            <div className='recommendList'>
                <div className='recommendItem active'>全部</div>
                <div className='recommendItem'>我的收藏</div>
                <div className='recommendItem'>自媒体</div>
                <div className='recommendItem'>产品经理</div>
                <div className='recommendItem'>营销策划</div>
                <div className='recommendItem'>技术研发</div>
                <div className='recommendItem'>行政人力</div>
            </div>
        </div>
    );
}

export default LeftHome;