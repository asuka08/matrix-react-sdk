
import React from 'react';
import '../../../res/css/syner/aiChat.css';

const AIChatPage: React.FC = () => {
    

    return (
        <div className="aichat_container">
            <div className="chatTopbar">
                <div className='partnerDiv'>
                    <div className='goback'></div>
                    <div className='headPic'></div>
                    <div className='introText'>
                        <p className='colorText'><span className='boldText'>余世维老师</span> @scona官方</p>
                        <p>我是你们的老朋友余世维，您可以就企业管理、领导力、执行力向我咨询，我将与你一起进步！</p>
                    </div>
                    <div className='addTeam'>
                        <div className='addButton'>添加到团队</div>
                    </div>
                </div>
            </div>
            <div className="chatTopbar">
               <div className='topbarNewchat'>
                    <p className='newText'>新对话</p>
                    <div className='rightButton'>这里是按钮</div>
                </div>
            </div>
            <div className='chatContainer'>
            <div className='chatRow'> 
                    <div className='chatCon'>
                        <div className='chatPic'>头像</div>
                        <div className='fileCon'>
                            <span className='fileStyle'>DOCX</span>北京5个小众又精致的露营地.DOCX
                        </div>
                    </div>
                </div>
                <div className='chatRow'> 
                    <div className='chatCon'>
                        <div className='chatPic'>头像</div>
                        <div className='normalCon'>国企改革势在必行吗？</div>
                    </div>
                </div>
                <div className='chatRow'>
                    <div className='chatCon'>
                        <div className='chatPic'>头像</div>
                        <div className='answerCon'>
                            是的，国企改革势在必行。随着市场经济的发展，国企面临着越来越多的挑战和压力，需要进行改革以适应市场变化和竞争。改革可以包括加强企业的管理、提高效率、加强监督等方面，以提升企业的竞争力和可持续发展能力。同时，国企改革也需要注重公平和公正，保障员工的权益和利益。
                        </div>
                        <div className='answerButtons'>
                            <span className='refresh'>重新回答</span>
                            <span className='againGenerate'>重新生成</span>
                            <p className='answerRightButton'>
                                <span className='copyIcon'></span>
                                <span className='shareIcon'></span>
                                <span className='readIcon'></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='tryTitle'>试着问问</div>
                <div className='moreQuestion'>
                    <span>国企面临的压力有哪些？</span>
                    <span>国企需要适应什么样的市场？</span>
                    <span>改革如何提高效率？</span>
                </div>
            </div>

            <div className='chatDiv'>
                <div className='inner'>
                    <div className='chatBox'>
                        <div className='textareaBox'>
                            <textarea className='antInput' placeholder='输入你想了解的内容，输入/调用灵感大全'></textarea>
                        </div>
                        <div className='chatButton'>
                            <span className='uploatIcon'></span>
                            <span className='chatIcon'></span>
                            <span className='sendIcon'></span>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
}

export default AIChatPage;
