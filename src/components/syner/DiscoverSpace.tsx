
import React from 'react';
import '../../../res/css/syner/DiscoverSpace.css';

const DiscoverSpace: React.FC = () => {

    return (
        <div className='spaceItem'>
            <div className='spaceImage'>
                <div className='sapceBgpic'><img src='/welcome/syner/temp/spacebg.png'></img></div>
                <div className='headPicture'>
                    <img src='/welcome/syner/temp/headpic.jpeg'></img>
                </div>
            </div>
            <div className='spaceContent'>              
                <h4 className='spaceTitle'>AI研习社</h4>
                <p className='spaceDescription'>专注于推广AIGC工具的使用技能培训</p>
                <div className='spaceMeta'>
                <span className='sapceViews'>2324人在线</span>
                <span className='spaceLikes'>12324位成员</span>
                </div>
            </div>
        </div>
    );
}

export default DiscoverSpace;
