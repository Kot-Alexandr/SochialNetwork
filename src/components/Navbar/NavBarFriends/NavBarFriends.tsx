import React from 'react';
import s from './../Navbar.module.css';

type NavBarFriendsPropsType = {
    name: string
    img: string
}

const NavBarFriends = (props: NavBarFriendsPropsType) => {
       return (
        <div className={s.friendsname}><img src={props.img}/><div>{props.name}</div></div>
    )
}


export default NavBarFriends