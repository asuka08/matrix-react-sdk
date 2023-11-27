import React from 'react';
import '../../../res/css/syner/chatLeft.css';

const LeftSquare: React.FC = () => {

    return (
        <div>
            <div className='leftLargeTitle'>
                <div className='title'>社区</div>
                <div className='foldButton'></div>
            </div>
            <div className='spaceMenu'>
                <ul>
                    <li className='active'><span className='recommendIcon'></span>推荐</li>
                </ul>
            </div>
        </div>
    );
}

export default LeftSquare;