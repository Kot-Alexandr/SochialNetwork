import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

type HeaderPorpsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header = (props: HeaderPorpsType) => {
    return <header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCBt6A7H-BtPRNZyGm-RT6gDW1Hm4AkjRSg&usqp=CAU' />
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout} >Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}

export default Header