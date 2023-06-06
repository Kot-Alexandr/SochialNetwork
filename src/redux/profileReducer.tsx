import { Dispatch } from "react";
import { profileAPI } from "../api/api";



type profileReducerStateType = {
    postData: Array<{ id: number, message: string, likesCount: number }>
    profile: null | serverGetProfileType
    status: string | null
}

export type serverGetProfileType = {
    aboutMe: string, lookingForAJob: boolean,
    lookingForAJobDescription: string, fullName: string, userId: number,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    photos: { small: string | undefined, large: string | undefined }
}

let initialState = {
    postData: [
        { id: 1, message: "How are you?", likesCount: 5 },
        { id: 2, message: "It's my first post", likesCount: 10 }

    ],
    profile: null,
    status: ""
}

const profileReducer = (state: profileReducerStateType = initialState, action: allProfileReducerType): profileReducerStateType => {
    switch (action.type) {
        case "ADD_POST": {
            return { ...state, postData: [...state.postData, { id: 3, message: action.newPostText, likesCount: 0 }] }
        }
        case "SET_USER_PROFILE": {
            return { ...state, profile: { ...action.profile } }
        }
        case "SET_STATUS": {
            return { ...state, status: action.status }
        }
        default: return state
    }
}

export type allProfileReducerType = ReturnType<typeof addPostAC> | ReturnType<typeof setUserProfile> | ReturnType<typeof setStatus>

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD_POST",
        newPostText
    } as const
}

export const setUserProfile = (profile: serverGetProfileType) => {
    return {
        type: "SET_USER_PROFILE",
        profile
    } as const
}
export const setStatus = (status: string | null) => {
    return {
        type: "SET_STATUS",
        status
    } as const
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch<allProfileReducerType>) => {
        profileAPI.getProfileData(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getUserStatus = (userId: string) => {
    return (dispatch: Dispatch<allProfileReducerType>) => {
        profileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
}

export const updateUserStatus = (status: string | null) => {
    return (dispatch: Dispatch<allProfileReducerType>) => {
        profileAPI.updateUserStatus(status)
            .then(response => {
                if (response.data.resultCode === 0)
                    dispatch(setStatus(status))
            })
    }
}

export default profileReducer