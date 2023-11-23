import React, {useEffect, useState} from 'react';
import ExploreAgent from './ExploreAgent';
import ExploreSpace from './ExploreSpace';
import AIChatPage from './AiChatPage';
import { AiChatUtils, AiChatPageTypeEnum } from './AiChatUtils';



const AiChatContainer: React.FC = () => {
    const [hash, setHash] = useState<string>('');

    useEffect(() => {
        const currentHash = window.location.hash;

        setHash(currentHash);
    }, []);

    const { pageType, pageId } = AiChatUtils.parseHash(hash);
    

    let pageElement;
    if( pageType === AiChatPageTypeEnum.llm ) {
        pageElement = <AIChatPage pageType={pageType} pageId={pageId} />;
    } else if( pageType === AiChatPageTypeEnum.agent ) {
        if ( pageId ) {
            pageElement = <AIChatPage pageType={pageType} pageId={pageId} />;
        } else {
            pageElement = <ExploreAgent />;
        }
    } else if ( pageType === AiChatPageTypeEnum.square ) {
        pageElement = <ExploreSpace />;
    }

    return (
        <>
            {pageElement}
        </>
    );
}

export default AiChatContainer;