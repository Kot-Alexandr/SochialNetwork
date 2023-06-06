import { connect } from 'react-redux';
import { allNavBarReducerType, zatichkavNavBarReducerAC } from '../../redux/navBarReducer';
import { AppStateType } from '../../redux/redux-store';
import Navbar from './Navbar';



let mapStateToProps = (state: AppStateType) => {
    return {
        navBarData: state.navBarPage.friendsData
    }
}

let mapDispatchToProps = (dispatch: (action: allNavBarReducerType) => void) => {
    return {
        callBack: () => {
            dispatch(zatichkavNavBarReducerAC())
        }
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer