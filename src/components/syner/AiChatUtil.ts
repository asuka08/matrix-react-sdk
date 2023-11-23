
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
            return { page_type: "", page_id: "" };
        }

        const paraList = hash.split(/[#:]/);
        let page_type = "";
        let page_id = "";

        if (paraList.length > 2) {
            page_type = paraList[2];
        }

        if (paraList.length > 3) {
            page_id = paraList[3];
        }

        return { page_type, page_id };
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