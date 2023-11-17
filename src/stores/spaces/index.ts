/*
Copyright 2021 The Matrix.org Foundation C.I.C.

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

import { Room, HierarchyRoom } from "matrix-js-sdk/src/matrix";

import { _t } from "../../languageHandler";

// The consts & types are moved out here to prevent cyclical imports

export const UPDATE_TOP_LEVEL_SPACES = Symbol("top-level-spaces");
export const UPDATE_INVITED_SPACES = Symbol("invited-spaces");
export const UPDATE_SELECTED_SPACE = Symbol("selected-space");
export const UPDATE_HOME_BEHAVIOUR = Symbol("home-behaviour");
export const UPDATE_SUGGESTED_ROOMS = Symbol("suggested-rooms");
// Space Key will be emitted when a Space's children change

export enum MetaSpace {
    Home = "home-space",
    Favourites = "favourites-space",
    People = "people-space",
    Orphans = "orphans-space",
    AiChat = "aichat-space",    // [syner] 添加一个AI Chat 的MetaSpace by 王远
    AiAgent = "aiagent-space",       // [syner] 添加一个Agent 的MetaSpace by 王远
    AiSquare = "aisquare-space",       // [syner] 添加一个Square 的MetaSpace by 王远
    AiGround = "aiground-space"       // [syner] 添加一个Space 的MetaSpace by 王远
}

export const getMetaSpaceName = (spaceKey: MetaSpace, allRoomsInHome = false): string => {
    switch (spaceKey) {
        case MetaSpace.Home:
            return allRoomsInHome ? _t("common|all_rooms") : _t("common|home");
        case MetaSpace.Favourites:
            return _t("common|favourites");
        case MetaSpace.People:
            return _t("common|people");
        case MetaSpace.Orphans:
            return _t("common|orphan_rooms");

        // [syner start] 添加一个AIChat, AiAgent, AiSpace 的MetaSpace by 王远
        case MetaSpace.AiChat: 
            return "AI对话";
        case MetaSpace.AiAgent: 
            return "AI伙伴";
        case MetaSpace.AiSquare:
            return "发现广场"
        case MetaSpace.AiGround: 
            return "发现社区";
    }
};

export type SpaceKey = MetaSpace | Room["roomId"];

export interface ISuggestedRoom extends HierarchyRoom {
    viaServers: string[];
}

export function isMetaSpace(spaceKey?: SpaceKey): boolean {
    return (
        spaceKey === MetaSpace.Home ||
        spaceKey === MetaSpace.Favourites ||
        spaceKey === MetaSpace.People ||
        spaceKey === MetaSpace.Orphans || 

        // [syner]
        spaceKey === MetaSpace.AiChat || 
        spaceKey === MetaSpace.AiAgent ||
        spaceKey === MetaSpace.AiSquare ||
        spaceKey === MetaSpace.AiGround
    );
}
