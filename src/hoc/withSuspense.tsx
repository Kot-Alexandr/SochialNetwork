import { ComponentType } from "react";
import { Preloader } from "../components/Common/Preloader/Preloader";
import React from "react";

type MapStateToPropType = {
    isAuth: boolean
}


export const withSuspense = (Component: ComponentType) => {

    return (props: any) => {
        <React.Suspense fallback={<Preloader />}>
            <Component {...props} />
        </React.Suspense>
    }

}