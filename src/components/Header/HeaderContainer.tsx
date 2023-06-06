import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducers';
import { AppStateType } from '../../redux/redux-store';
import Header from './Header';

type HeaderContainerPorpsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}


class HeaderContainer extends React.Component<HeaderContainerPorpsType> {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, { logout })(HeaderContainer)