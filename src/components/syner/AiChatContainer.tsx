import React, {useEffect, useState} from 'react';
import ExploreAgent from './ExploreAgent';
import ExploreSpace from './ExploreSpace';
import AIChatPage from './AiChatPage';
import { AiChatUtils, AiChatPageTypeEnum } from './utils/AiChatUtils';

interface Props {
  view?: string;
}

export function AiChatContainer({ view = ''  }: Props): JSX.Element {
    const [hash, setHash] = useState<string>('');

    const currentHash = window.location.hash;
    
    useEffect(() => {
        setHash(currentHash);
    }, [view]);

    const { pageType, pageId } = AiChatUtils.parseHash(hash);
    
    console.log('syner pageType1 :>> ', pageType);
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