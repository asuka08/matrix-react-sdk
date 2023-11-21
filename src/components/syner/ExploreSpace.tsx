
import React from 'react';
import ElemSpace from "./ElemSpace";
import '../../../res/css/syner/ElemSpace.css';
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
                <ElemSpace 
                    bgImageUrl="/welcome/syner/space/space_bg_ai.png"
                    avatarUrl="/welcome/syner/space/space_avatart_ai.png"
                    title="AI研习社"
                    description="专注于推广AIGC工具的使用技能培训"
                    onlineCount={111}
                    memberCount={1111}
                />

                <ElemSpace 
                    bgImageUrl="/welcome/syner/space/space_bg_yushiwei.png"
                    avatarUrl="/welcome/syner/space/space_avatar_yushiwei.png"
                    title="世维研习社"
                    description="来这里,与你的老朋友余世维对话"
                    onlineCount={222}
                    memberCount={2222}
                />
                
                <ElemSpace 
                    bgImageUrl="/welcome/syner/space/space_bg_book.png"
                    avatarUrl="/welcome/syner/space/space_avatar_book.png"
                    title="书氧圈"
                    description="心灵之旅,始于阅读, 共享美好"
                    onlineCount={333}
                    memberCount={3333}
                />
                
                <ElemSpace 
                    bgImageUrl="/welcome/syner/space/space_bg_film.png"
                    avatarUrl="/welcome/syner/space/space_avatar_film.png"
                    title="影史留痕"
                    description="一起看电影, 一起品人生"
                    onlineCount={444}
                    memberCount={4444}
                />

                <ElemSpace 
                    bgImageUrl="/welcome/syner/space/space_bg_film.png"
                    avatarUrl="/welcome/syner/space/space_avatar_film.png"
                    title="影史留痕"
                    description="一起看电影, 一起品人生"
                    onlineCount={555}
                    memberCount={5555}
                />      

                <ElemSpace 
                    bgImageUrl="/welcome/syner/space/space_bg_film.png"
                    avatarUrl="/welcome/syner/space/space_avatar_film.png"
                    title="影史留痕"
                    description="一起看电影, 一起品人生"
                    onlineCount={666}
                    memberCount={6666}
                />

                <ElemSpace 
                    bgImageUrl="/welcome/syner/space/space_bg_film.png"
                    avatarUrl="/welcome/syner/space/space_avatar_film.png"
                    title="影史留痕"
                    description="一起看电影, 一起品人生"
                    onlineCount={777}
                    memberCount={7777}
                />


            </div>
        </div>
    );
}

export default  ExploreSpace;
