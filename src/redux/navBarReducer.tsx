type navBarStateType = {
    friendsData: Array<{ id: number, name: string, img: string }>
}

let initialState = {
    friendsData: [
        { id: 1, name: "Dasha", img: "https://static.boredpanda.com/blog/wp-content/uploads/2015/09/dark-disney-princesses-jeffrey-thomas-43.jpg" },
        { id: 2, name: "Svyat", img: "https://www.looper.com/img/gallery/dark-disney-fan-theories-that-would-change-everything/l-intro-1636403463.jpg" },
        { id: 3, name: "Anton", img: "https://cdn3.whatculture.com/images/2020/04/fd0216ea297ca0a7-1200x675.jpg" },
    ]
}

const navBarReducer = (state: navBarStateType = initialState, action: allNavBarReducerType) => {
    switch (action.type) {
        case "ZA-TICHKA": {
            return state
        }
        default: {
            return state
        }
    }
}

export type allNavBarReducerType = ReturnType<typeof zatichkavNavBarReducerAC>

export const zatichkavNavBarReducerAC = () => {
    return {
        type: "ZA-TICHKA",
    } as const
}


export default navBarReducer