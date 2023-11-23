import React, {useEffect, useState} from 'react';
import ExploreAgent from './ExploreAgent';
import ExploreSpace from './ExploreSpace';
import AIChatPage from './AiChatPage';
import { AiChatUtils, AiChatPageTypeEnum } from './AiChatUtil';



const AiChatContainer: React.FC = () => {
    const [hash, setHash] = useState<string>('');

    useEffect(() => {
        const currentHash = window.location.hash;

        setHash(currentHash);
    }, []);

    const { page_type, page_id } = AiChatUtils.parseHash(hash);
    

    let pageElement;
    if( page_type === AiChatPageTypeEnum.llm ) {
        pageElement = <AIChatPage pageType={page_type} pageId={page_id} />;
    } else if( page_type === AiChatPageTypeEnum.agent ) {
        if ( page_id ) {
            pageElement = <AIChatPage pageType={page_type} pageId={page_id} />;
        } else {
            pageElement = <ExploreAgent />;
        }
    } else if ( page_type === AiChatPageTypeEnum.square ) {
        pageElement = <ExploreSpace />;
    }

    return (
        <>
            {pageElement}
        </>
    );
}

export default AiChatContainer;