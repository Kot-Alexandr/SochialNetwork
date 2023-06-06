import React from "react"
// import messageReducer, { allMessageReducerType } from "./messageReducer"
// import navBarREducer, { allNavBarReducerType } from "./navBarReducer"
// import profileReducer, { allProfileReducerType } from "./profileReducer"
// import { allUsersReducerType } from "./usersReducers"

// export type StateType = {
//     messagePage: {
//         dialogsData: Array<{ id: number, name: string }>
//         messagesData: Array<{ id: number, message: string }>
//         newMessageBody: string
//     }
//     profilePage: {
//         postData: Array<{ id: number, message: string, likesCount: number }>
//         newPostText: string
//         newPostElement: React.RefObject<HTMLTextAreaElement>
//     }
//     navBarPage: {
//         friendsData: Array<{ id: number, name: string, img: string }>
//     }
//     usersPage: {
//         users: Array<{ id: number, avatarUser: string, followed: boolean, fullName: string, status: string, location: { city: string, country: string } }>
//     }
// }

// export type StoreType = {
//     _state: StateType
//     _rerender: () => void

//     getState: () => StateType
//     subscribe: (observer: () => void) => void

//     dispatch: (action: allDispatch) => void
// }

// export type allDispatch = allMessageReducerType | allProfileReducerType | allNavBarReducerType | allUsersReducerType

// let store: StoreType = {
//     _state: {
//         messagePage: {
//             dialogsData: [
//                 { id: 1, name: "Dasha" },
//                 { id: 2, name: "Saved" },
//                 { id: 3, name: "Anton" },
//                 { id: 4, name: "Mama" },
//                 { id: 5, name: "Svyat" }
//             ],
//             messagesData: [
//                 { id: 1, message: "Hi" },
//                 { id: 2, message: "Po kamasutrim?" },
//                 { id: 3, message: "Yo man, u god damn right" },
//             ],
//             newMessageBody: ""
//         },
//         profilePage: {
//             postData: [
//                 { id: 1, message: "How are you?", likesCount: 5 },
//                 { id: 2, message: "It's my first post", likesCount: 10 }

//             ],
//             newPostText: "I'm missing you, tell something new!!!",
//             newPostElement: React.createRef<HTMLTextAreaElement>()
//         },
//         navBarPage: {
//             friendsData: [
//                 { id: 1, name: "Dasha", img: "https://static.boredpanda.com/blog/wp-content/uploads/2015/09/dark-disney-princesses-jeffrey-thomas-43.jpg" },
//                 { id: 2, name: "Svyat", img: "https://www.looper.com/img/gallery/dark-disney-fan-theories-that-would-change-everything/l-intro-1636403463.jpg" },
//                 { id: 3, name: "Anton", img: "https://cdn3.whatculture.com/images/2020/04/fd0216ea297ca0a7-1200x675.jpg" },
//             ]
//         },
//         usersPage: {
//             users: [{ id: 1, avatarUser: "https://i.pinimg.com/originals/f3/b7/6c/f3b76c9aa0f1d357f8ec87a4404626d4.jpg", followed: false, fullName: "Dimka", status: "My home - my rules", location: { city: "Minsk", country: "Belarus" } },
//             { id: 2, avatarUser: "https://i.pinimg.com/originals/f3/b7/6c/f3b76c9aa0f1d357f8ec87a4404626d4.jpg", followed: false, fullName: "JKS", status: "no aim - no luck", location: { city: "Minsk", country: "Belarus" } },
//             { id: 3, avatarUser: "https://i.pinimg.com/originals/f3/b7/6c/f3b76c9aa0f1d357f8ec87a4404626d4.jpg", followed: true, fullName: "Afonya", status: "You borrowed a ruble", location: { city: "Kiev", country: "Ukraine" } },
//             { id: 4, avatarUser: "https://i.pinimg.com/originals/f3/b7/6c/f3b76c9aa0f1d357f8ec87a4404626d4.jpg", followed: false, fullName: "Kesha", status: "Did your state on Gaiti", location: { city: "Moscow", country: "Russia" } },
//             { id: 5, avatarUser: "https://i.pinimg.com/originals/f3/b7/6c/f3b76c9aa0f1d357f8ec87a4404626d4.jpg", followed: false, fullName: "Maks M.", status: "Mad road", location: { city: "Kiev", country: "Ukraine" } },
//             { id: 6, avatarUser: "https://i.pinimg.com/originals/f3/b7/6c/f3b76c9aa0f1d357f8ec87a4404626d4.jpg", followed: true, fullName: "Rorty Sanches", status: "Back in future", location: { city: "Moscow", country: "Russia" } },
//             ]
//         }
//     },
//     _rerender() { },


//     getState() {
//         return this._state
//     },
//     subscribe(observer: () => void) {
//         this._rerender = observer
//     },

//     dispatch(action) {
//         profileReducer(this._state.profilePage, action)
//         messageReducer(this._state.messagePage, action)
//         navBarREducer(this._state.navBarPage, action)
//         this._rerender()
//     }

// }



// export default store