import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducers";
import messageReducer from "./messageReducer";
import navBarReducer from "./navBarReducer";
import profileReducer from "./profileReducer";
import userReducer from "./usersReducers";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "./appReducers";

let rootReducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    navBarPage: navBarReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

let store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

export type AppStoreType = typeof store 

export type AppStateType = ReturnType<typeof rootReducers>



export default store