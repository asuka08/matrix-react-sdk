
import React from 'react';
import DiscoverSpace from "../syner/DiscoverSpace";
import '../../../res/css/syner/DiscoverSpace.css';
import '../../../res/css/syner/space.css';

const ExploreSpace: React.FC = () => {
    

    return (
        <div>
            <div className='spaceTop'>
                <h2>在Cona找到自己感兴趣的社区</h2>
                <p>与伙伴一起探索最新知识</p>
                <div className='topInput'>
                    <input placeholder='搜索社区'></input>
                    <div className='topSearchButton'></div>
                </div>
            </div>
            <div className='exploreTitle'><h3>特色社区</h3></div>
            <div className='spaceShow'>
                <DiscoverSpace />
                <DiscoverSpace />
                <DiscoverSpace />
                <DiscoverSpace />
                <DiscoverSpace />
                <DiscoverSpace />
                <DiscoverSpace />
            </div>
        </div>
    );
}

export default  ExploreSpace;
