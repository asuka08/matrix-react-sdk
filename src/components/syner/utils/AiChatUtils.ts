
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
     * 获取AiChat服务URL
     * @param baseUrl 
     * @param question 
     * @param modelId 
     * @returns 
     */
    static getAiChatServUrl(baseUrl: string, question:string, modelId:string) {
        if(!baseUrl) {
            let baseUrlTemp = baseUrl; 
        } else {
            let baseUrlTemp = "http://synerai.cona.ai/aichat/";
        }
        return `${baseUrl}?question=${encodeURIComponent(question)}&model=${modelId}`;
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