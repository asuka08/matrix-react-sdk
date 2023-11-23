import React, {useEffect, useState} from 'react';
import LeftLlmChat from './LeftLlmChat';
import LeftAgentChat from './LeftAgentChat';
import { AiChatPageTypeEnum, AiChatUtils } from './AiChatUtil';
import LeftSquare from './LeftSquare';


const LeftAiChatContainer: React.FC = () => {

    const [hash, setHash] = useState<string>('');

    useEffect(() => {
        const currentHash = window.location.hash;
        setHash(currentHash);
    }, []);


    const { page_type, page_id } = AiChatUtils.parseHash(hash);

    let leftElement;
    if( page_type === AiChatPageTypeEnum.llm ) {
        leftElement = <LeftLlmChat />;
    } else if( page_type === AiChatPageTypeEnum.agent ) {
        leftElement = <LeftAgentChat />;
    } else if( page_type === AiChatPageTypeEnum.square ) {
        leftElement = <LeftSquare />;
    }

    return (
        <>
            {leftElement}
        </>
    );
}

export default LeftAiChatContainer;