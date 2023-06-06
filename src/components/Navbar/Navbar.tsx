import { NavLink } from 'react-router-dom';
import { allNavBarReducerType } from '../../redux/navBarReducer';
import s from './Navbar.module.css';
import NavBarFriends from './NavBarFriends/NavBarFriends';

type NavbarporpsType = {
    navBarData: Array<{ id: number, name: string, img: string }>
    callBack: (action: allNavBarReducerType) => void
}



const Navbar = (props: NavbarporpsType) => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
        <div>
            <div className={s.friends}>Friends</div>
            <div className={s.friendsother}>{props.navBarData.map((el,index)=> <NavBarFriends name={el.name} img={el.img} key={index}/>)}</div>
            </div>
    </nav>
}

export default Navbar