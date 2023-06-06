import { Dispatch } from "redux"
import { AppThunk, allAuthReducerType, getAuth } from "./authReducers"

type appReducerStateType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}


const appReducer = (state: appReducerStateType = initialState, action: allAppReducerType): appReducerStateType => {
    switch (action.type) {
        case "SET_INITIALIZED": {
            return { ...state, initialized: true }
        }
        default: return state
    }
}

export type allAppReducerType = ReturnType<typeof initializedSuccess>



export const initializedSuccess = () => {
    return {
        type: "SET_INITIALIZED",
    } as const
}

export const initializedApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(getAuth())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer