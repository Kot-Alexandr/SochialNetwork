import { Dispatch } from "react"
import { userAPI } from "../api/api"

type usersReducerStateType = {
    users: Array<{ id: number, avatarUser: string, followed: boolean, name: string, status: string, location: { city: string, country: string }, photos: { small: string, big: string } }>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
}
export type userType = {
    id: number, avatarUser: string, followed: boolean, name: string, status: string, location: { city: string, country: string }, photos: { small: string, big: string }
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false
}


const userReducer = (state: usersReducerStateType = initialState, action: allUsersReducerType): usersReducerStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return { ...state, users: [...state.users.map(el => el.id === action.userID ? { ...el, followed: true } : el)] }
        }
        case "UNFOLLOW": {
            return { ...state, users: [...state.users.map(el => el.id === action.userID ? { ...el, followed: false } : el)] }
        }
        case "SET_USERS": {
            return { ...state, users: [...action.users] }
        }
        case "SET_CURRENT_PAGE": {
            return { ...state, currentPage: action.page }
        }
        case "SET_TOTAL_USERS_COUNT": {
            return { ...state, totalUsersCount: action.totalCount }
        }
        case "TOOGLE_IS_FETCHING": {
            return { ...state, isFetching: action.isFetching }
        }
        case "TOOGLE_IS_FOLLOWING": {
            return { ...state, followingInProgress: action.followingInProgress }
        }
        default: return state
    }
}

export type allUsersReducerType = ReturnType<typeof followSuccess> | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers> | ReturnType<typeof setPage> | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching> | ReturnType<typeof toggleIsFollowing>

export const followSuccess = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const
}

export const unFollowSuccess = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}

export const setUsers = (users: userType[]) => {
    return {
        type: "SET_USERS",
        users
    } as const
}

export const setPage = (page: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        page
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        totalCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOOGLE_IS_FETCHING",
        isFetching
    } as const
}

export const toggleIsFollowing = (followingInProgress: boolean) => {
    return {
        type: "TOOGLE_IS_FOLLOWING",
        followingInProgress
    } as const
}

export const getUsers= (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<allUsersReducerType>) => {
        dispatch(toggleIsFetching(true))
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}


export const follow = (id:number) => {
    return (dispatch: Dispatch<allUsersReducerType>) => {
        dispatch(toggleIsFetching(true))
        userAPI.deleteFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollowSuccess(id))
                    dispatch(toggleIsFetching(false))
                }
            }) 
      
}}

export const unFollow = (id:number) => {
    return (dispatch: Dispatch<allUsersReducerType>) => {
        dispatch(toggleIsFetching(true))
        userAPI.postFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(id))
                }
                dispatch(toggleIsFetching(false))
            })
      
}}

export default userReducer