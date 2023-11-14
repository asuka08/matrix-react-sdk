import React from 'react';
import LeftLlmChat from './LeftLlmChat';
import LeftAgentChat from './LeftAgentChat';


const LeftAiChat: React.FC = () => {

    return (
        <div>
            <LeftLlmChat />
            <LeftAgentChat />
        </div>
    );
}

export default LeftAiChat;