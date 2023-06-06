import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { AppStateType } from "../redux/redux-store";
import { Redirect } from "react-router-dom";

type MapStateToPropType = {
    isAuth: boolean
}

let mapStateToPropsRedirect = (state: AppStateType): MapStateToPropType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T extends JSX.IntrinsicAttributes>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropType) => {

        let { isAuth, ...restProps } = props

        if (!isAuth) return <Redirect to={'/login'} />

        return <Component {...restProps as T} />

    }



    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent

}