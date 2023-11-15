import React, {useEffect, useState} from 'react';
import ExploreAgent from './ExploreAgent';
import ExploreSpace from './ ExploreSpace';
import AIChatPage from './AiChatPage';



const AiChatContainer: React.FC = () => {
    const [hash, setHash] = useState<string>('');

    useEffect(() => {
        const currentHash = window.location.hash;

        setHash(currentHash);
    }, []);

    // const ai_chat_page:string = screen.substring(7);
    // const para_list:string[] = ai_chat_page.split(/[#:]/);

    // const payload: ViewAiChatPayload = {
    //     action: Action.ViewAiChatPage,
    //     aichat_type: para_list.length>1 ? para_list[1] : "",
    //     aichat_id: para_list.length>2 ? para_list[2] : ""
    // };
    // dis.dispatch(payload);

    /*
    分解形如 #/aichat/#agent:yushiwei 这样的字符串
    URL参数形式
    首页		        /#/home
    Chat大模型聊天       /#/aichat/#llm
    Agent首页	        /#/aichat/#agent
    Agent聊天	        /#/aichat/#agent:yushiwei
    社区首页		     /#/aichat/#space
    */
    const para_list:string[] = hash.split(/[#:]/);
    let page_type = "";
    let page_id = "";

    if (para_list.length>2) {
        page_type = para_list[2];
    }

    if (para_list.length>3) {
        page_id = para_list[3];
    }

    let pageElement;
    if( page_type === "llm" ) {
        pageElement = <AIChatPage />;
    } else if( page_type === "agent" ) {
        pageElement = <ExploreAgent />;
    } else if ( page_type === "space" ) {
        pageElement = <ExploreSpace />;
    }

    return (
        <div>
            {pageElement}
        </div>
    );
}

export default AiChatContainer;