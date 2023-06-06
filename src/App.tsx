import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import { initializedApp } from './redux/appReducers';
import { AppStateType, AppStoreType } from './redux/redux-store';
import { Preloader } from './components/Common/Preloader/Preloader';


const DialogsContainer=React.lazy(()=>import('./components/Dialogs/DialogsContainer'))
const ProfileContainer=React.lazy(()=>import('./components/Profile/ProfileContainer'))

type AppTypeState = {
  store: AppStoreType
  initialized: boolean
  initializedApp: () => void
}

class App extends React.Component<AppTypeState> {

  componentDidMount() {
    this.props.initializedApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <NavbarContainer />
          <div className='app-wrapper-content'>
            <Route path='/profile/:userId?' render={() => {
            return <React.Suspense fallback={<Preloader/>}><ProfileContainer /></React.Suspense>}} />
            <Route path='/dialogs' render={() => {
            return <React.Suspense fallback={<Preloader/>}><DialogsContainer /></React.Suspense>}} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <LoginPage />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializedApp })(App)
