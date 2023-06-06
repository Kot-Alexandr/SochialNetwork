import { Dispatch } from "redux"
import { FormAction, stopSubmit } from "redux-form"
import { ThunkAction } from "redux-thunk"
import { authAPI } from "../api/api"
import { AppStateType } from "./redux-store"

type authReducerStateType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}



let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state: authReducerStateType = initialState, action: allAuthReducerType): authReducerStateType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return { ...state, ...action.payload }
        }
        default: return state
    }
}

export type allAuthReducerType = ReturnType<typeof setAuthUserData>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, allAuthReducerType | FormAction>

export const setAuthUserData = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: "SET_USER_DATA",
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}

export const getAuth = () => {
    return (dispatch: Dispatch<allAuthReducerType>) => {
        return authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const login = (email: string, password: string, remeberMe: boolean): AppThunk => {
    return (dispatch) => {
        authAPI.login(email, password, remeberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuth())
                } else {
                    let messages = data.messages.length > 0 ? data.messages[0] : "Some Error"
                    dispatch(stopSubmit('login', { _error: messages }))
                }
            })
    }
}

export const logout = () => {
    return (dispatch: Dispatch<allAuthReducerType>) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}

export default authReducer