import { connect } from 'react-redux';
import { addPostAC, allProfileReducerType } from '../../../redux/profileReducer';
import { AppStateType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';

let mapStateToProps = (state: AppStateType) => {
    return {
        postData: state.profilePage.postData,
    }
}

let mapDispatchToProps = (dispatch: (action: allProfileReducerType) => void) => {
    return {
        addPostButton: (newPostText: string) => {
            dispatch((addPostAC(newPostText)))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer



