
type messageReducerStateType = {
    dialogsData: Array<{ id: number, name: string }>
    messagesData: Array<{ id: number, message: string }>
}

let initialState = {
    dialogsData: [
        { id: 1, name: "Dasha" },
        { id: 2, name: "Saved" },
        { id: 3, name: "Anton" },
        { id: 4, name: "Mama" },
        { id: 5, name: "Svyat" }
    ],
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Po kamasutrim?" },
        { id: 3, message: "Yo man, u god damn right" },
    ],
}

const messageReducer = (state: messageReducerStateType = initialState, action: allMessageReducerType) => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            return { ...state, messagesData: [...state.messagesData, { id: 4, message: action.newMessageBody }], newMessageBody: "" }
        }
        default: return state
    }
}

export type allMessageReducerType = ReturnType<typeof sendMessageBodyAC>


export const sendMessageBodyAC = (newMessageBody: string) => {
    return {
        type: "SEND-MESSAGE",
        newMessageBody
    } as const
}



export default messageReducer