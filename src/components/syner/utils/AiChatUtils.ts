import Views from "../../../Views";

/**
 * AiChat相关页面工具函数类
 */
export class AiChatUtils {

    /**
     * 根据hash获取pageType和pageId
     * 分解形如 #/aichat/#agent:yushiwei 这样的字符串
     * URL参数形式
     * 首页		        /#/home
     * Chat大模型聊天    /#/aichat/#llm
     * Agent首页	    /#/aichat/#agent
     * Agent聊天	    /#/aichat/#agent:yushiwei
     * 社区首页		     /#/aichat/#square
     * @param hash hash
     */
    static parseHash(hash: string) {

        if (!hash) {
            return { pageType: "", pageId: "" };
        }

        const paraList = hash.split(/[#:]/);
        let pageType = "";
        let pageId = "";

        if (paraList.length > 2) {
            pageType = paraList[2];
        }

        if (paraList.length > 3) {
            pageId = paraList[3];
        }

        return { pageType, pageId };
    }

    /**
     * 获取模型ID
     * @returns 模型ID
     */
    static getModelId(page_type: string, page_id: string) {

        let model_id;
        if(page_type === "llm") {
            model_id = "openai";
        } 
        else if(page_type === "agent") {
            if(page_id === "yushiwei") {
                model_id = "yushiwei";
            } else {
                model_id = "debug"
            }
        } 
        else {
            model_id = "debug"
        }

        return model_id;
    }


    /**
     * 根据pageType和pageId获取llm_id和agent_id
     * @param pageType 
     * @param pageId 
     * @returns 
     */
    static getLlmAgentId(pageType: string, pageId: string) {
        let llm_id, agent_id;
        if(pageType === AiChatPageTypeEnum.llm) {
            llm_id = AiChatLlmType.openai;
        } else if(pageType === AiChatPageTypeEnum.agent) {
            llm_id = AiChatLlmType.agent;
            agent_id = pageId;
        } else {
            llm_id = AiChatLlmType.debug;
        }
        return [llm_id, agent_id];
    }

    /**
     * 获取AiChat服务URL
     * @param baseUrl 
     * @param question 
     * @param modelId 
     * @returns 
     */
    static getAiChatServUrl(baseUrl: string) {
        let baseUrlTemp;
        if(!baseUrl) {
            baseUrlTemp = baseUrl; 
        } else {
            baseUrlTemp = "https://synerai.cona.ai/aichat/";
        }
        return baseUrlTemp;
    }


    /**
     * 通过aichatType获取 AiChatPageTypeEnum 枚举
     * @param aichatType 
     * @returns 
     */
    static getAiChatPageType(aichatType: string) {
        let page_type = AiChatPageTypeEnum[aichatType as keyof typeof AiChatPageTypeEnum];

        if(!page_type) {
            page_type = AiChatPageTypeEnum.agent;
        }
        return page_type;
    }
}

/**
 * AiChat相关页面类型枚举
 */
export enum AiChatPageTypeEnum {
    llm = "llm",
    agent = "agent",
    square = "square",
}


/**
 * AiChat 大语言模型类型枚举
 */
export enum AiChatLlmType {
    openai = "openai",
    agent = "agent",
    debug = "debug"
}