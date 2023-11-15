
import { ActionPayload } from "../payloads";
import { Action } from "../actions";


/* eslint-disable camelcase */
/* [syner]  增加 View AiChat Payload*/
export interface ViewAiChatPayload extends Pick<ActionPayload, "action"> {
    action: Action.ViewAiChatPage;
    aichat_type: string;
    aichat_id: string;
}
