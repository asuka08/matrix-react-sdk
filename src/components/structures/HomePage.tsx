/*
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import * as React from "react";
import { useContext, useState } from "react";

import AutoHideScrollbar from "./AutoHideScrollbar";
import { getHomePageUrl } from "../../utils/pages";
import { _tDom } from "../../languageHandler";
import SdkConfig from "../../SdkConfig";
import dis from "../../dispatcher/dispatcher";
import { Action } from "../../dispatcher/actions";
import BaseAvatar from "../views/avatars/BaseAvatar";
import { OwnProfileStore } from "../../stores/OwnProfileStore";
import AccessibleButton, { ButtonEvent } from "../views/elements/AccessibleButton";
import { UPDATE_EVENT } from "../../stores/AsyncStore";
import { useEventEmitter } from "../../hooks/useEventEmitter";
import MatrixClientContext, { useMatrixClientContext } from "../../contexts/MatrixClientContext";
import MiniAvatarUploader, { AVATAR_SIZE } from "../views/elements/MiniAvatarUploader";
import PosthogTrackers from "../../PosthogTrackers";
import EmbeddedPage from "./EmbeddedPage";

// [syner] 
import StartAIChat from "../syner/StartAIChat";
import ElemAgent from "../syner/DiscoverAgent";
import ElemSpace from "../syner/DiscoverSpace";

const onClickSendDm = (ev: ButtonEvent): void => {
    PosthogTrackers.trackInteraction("WebHomeCreateChatButton", ev);
    dis.dispatch({ action: "view_create_chat" });
};

const onClickExplore = (ev: ButtonEvent): void => {
    PosthogTrackers.trackInteraction("WebHomeExploreRoomsButton", ev);
    dis.fire(Action.ViewRoomDirectory);
};

const onClickNewRoom = (ev: ButtonEvent): void => {
    PosthogTrackers.trackInteraction("WebHomeCreateRoomButton", ev);
    dis.dispatch({ action: "view_create_room" });
};

interface IProps {
    justRegistered?: boolean;
}

const getOwnProfile = (
    userId: string,
): {
    displayName: string;
    avatarUrl?: string;
} => ({
    displayName: OwnProfileStore.instance.displayName || userId,
    avatarUrl: OwnProfileStore.instance.getHttpAvatarUrl(parseInt(AVATAR_SIZE, 10)) ?? undefined,
});

const UserWelcomeTop: React.FC = () => {
    const cli = useContext(MatrixClientContext);
    const userId = cli.getUserId()!;
    const [ownProfile, setOwnProfile] = useState(getOwnProfile(userId));
    useEventEmitter(OwnProfileStore.instance, UPDATE_EVENT, () => {
        setOwnProfile(getOwnProfile(userId));
    });

    return (
        <div>
            <MiniAvatarUploader
                hasAvatar={!!ownProfile.avatarUrl}
                hasAvatarLabel={_tDom("onboarding|has_avatar_label")}
                noAvatarLabel={_tDom("onboarding|no_avatar_label")}
                setAvatarUrl={(url) => cli.setAvatarUrl(url)}
                isUserAvatar
                onClick={(ev) => PosthogTrackers.trackInteraction("WebHomeMiniAvatarUploadButton", ev)}
            >
                <BaseAvatar
                    idName={userId}
                    name={ownProfile.displayName}
                    url={ownProfile.avatarUrl}
                    size={AVATAR_SIZE + "px"}
                />
            </MiniAvatarUploader>

            <h1>{_tDom("onboarding|welcome_user", { name: ownProfile.displayName })}</h1>
            <h2>{_tDom("onboarding|welcome_detail")}</h2>
        </div>
    );
};

const HomePage: React.FC<IProps> = ({ justRegistered = false }) => {
    const cli = useMatrixClientContext();
    const config = SdkConfig.get();
    const pageUrl = getHomePageUrl(config, cli);

    if (pageUrl) {
        return <EmbeddedPage className="mx_HomePage" url={pageUrl} scrollbar={true} />;
    }

    let introSection: JSX.Element;
    if (justRegistered || !OwnProfileStore.instance.getHttpAvatarUrl(parseInt(AVATAR_SIZE, 10))) {
        introSection = <UserWelcomeTop />;
    } else {
        const brandingConfig = SdkConfig.getObject("branding");
        const logoUrl = brandingConfig?.get("auth_header_logo_url") ?? "themes/element/img/logos/element-logo.svg";

        introSection = (
            <React.Fragment>
                <img src={logoUrl} alt={config.brand} />
                <h1>{_tDom("onboarding|intro_welcome", { appName: config.brand })}</h1>
                <h2>{_tDom("onboarding|intro_byline")}</h2>
            </React.Fragment>
        );
    }

    introSection = (
        <StartAIChat />
    )

    return (
        <AutoHideScrollbar className="mx_HomePage mx_HomePage_default" element="main">
            <div className="mx_HomePage_default_wrapper">
                {introSection}
                <div className="discoverTitle">
                <h2>发现伙伴</h2> 
                <div className="moreLink">查看更多</div>
                </div>
                <div className="mx_HomePage_default_buttons discoverContainer">
                    <ElemAgent
                        avatarUrl="/welcome/syner/space/agent_avatar_yushiwei.png"
                        title="余世维老师"
                        description="欢迎来到世维研习社，我是你们的老朋友世维"
                        chatCount={101}
                        modelId="yushiwei"
                     />
                    <ElemAgent
                        avatarUrl="/welcome/syner/space/agent_avatar_ai.png"
                        title="AI领域专家"
                        description="培养中国本土的AI智能化人才"
                        chatCount={201}
                        modelId="yushiwei"
                     />
                    <ElemAgent
                        avatarUrl="/welcome/syner/space/agent_avatar_yushiwei.png"
                        title="余世维老师"
                        description="欢迎来到世维研习社，我是你们的老朋友世维"
                        chatCount={201}
                        modelId="yushiwei"
                     />
                </div>
                <div className="discoverTitle">
                    <h2>发现社区</h2> 
                    <div className="moreLink">查看更多</div>
                </div>             
                <div className="mx_HomePage_default_buttons discoverContainer">
                    <ElemSpace 
                        bgImageUrl="/welcome/syner/space/space_bg_ai.png"
                        avatarUrl="/welcome/syner/space/space_avatart_ai.png"
                        title="AI研习社"
                        description="专注于推广AIGC工具的使用技能培训"
                        onlineCount={111}
                        memberCount={1111}
                    />

                    <ElemSpace 
                        bgImageUrl="/welcome/syner/space/space_bg_yushiwei.png"
                        avatarUrl="/welcome/syner/space/space_avatar_yushiwei.png"
                        title="世维研习社"
                        description="来这里,与你的老朋友余世维对话"
                        onlineCount={222}
                        memberCount={2222}
                    />
                    
                    <ElemSpace 
                        bgImageUrl="/welcome/syner/space/space_bg_book.png"
                        avatarUrl="/welcome/syner/space/space_avatar_book.png"
                        title="书氧圈"
                        description="心灵之旅,始于阅读, 共享美好"
                        onlineCount={333}
                        memberCount={3333}
                    />
                    
                    <ElemSpace 
                        bgImageUrl="/welcome/syner/space/space_bg_film.png"
                        avatarUrl="/welcome/syner/space/space_avatar_film.png"
                        title="影史留痕"
                        description="一起看电影, 一起品人生"
                        onlineCount={444}
                        memberCount={4444}
                    />
                </div>
            </div>
        </AutoHideScrollbar>
    );
};

export default HomePage;
