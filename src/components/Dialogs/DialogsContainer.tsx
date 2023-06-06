import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { allMessageReducerType, sendMessageBodyAC } from '../../redux/messageReducer';
import { AppStateType } from '../../redux/redux-store';
import Dialogs from './Dialogs';

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsData: state.messagePage.dialogsData,
        messagesData: state.messagePage.messagesData,
    }
}

let mapDispatchToProps = (dispatch: (action: allMessageReducerType) => void) => {
    return {
        addMessage: (newMessageBody: string) => {
            dispatch(sendMessageBodyAC(newMessageBody))
        },
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)