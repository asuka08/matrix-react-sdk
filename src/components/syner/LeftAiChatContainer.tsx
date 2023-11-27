import React, {useEffect, useState} from 'react';
import LeftLlmChat from './LeftLlmChat';
import LeftAgentChat from './LeftAgentChat';
import { AiChatPageTypeEnum, AiChatUtils } from './utils/AiChatUtils';
import LeftSquare from './LeftSquare';


const LeftAiChatContainer: React.FC = () => {

    const [hash, setHash] = useState<string>('');

    useEffect(() => {
        const currentHash = window.location.hash;
        setHash(currentHash);
    }, []);


    const { pageType, pageId } = AiChatUtils.parseHash(hash);

    let leftElement;
    if( pageType === AiChatPageTypeEnum.llm ) {
        leftElement = <LeftLlmChat />;
    } else if( pageType === AiChatPageTypeEnum.agent ) {
        leftElement = <LeftAgentChat />;
    } else if( pageType === AiChatPageTypeEnum.square ) {
        leftElement = <LeftSquare />;
    }

    return (
        <>
            {leftElement}
        </>
    );
}

export default LeftAiChatContainer;