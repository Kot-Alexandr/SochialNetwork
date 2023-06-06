import { NavLink } from 'react-router-dom'
import userPNG from "../../assets/images/images.png"
import { userType } from '../../redux/usersReducers'
import s from './users.module.css'


type UserType = {
    user: userType
    followingInProgress: boolean
    follow: (id: number) => void
    unFollow: (id: number) => void
}


let User = ({ user, followingInProgress, follow, unFollow }: UserType) => {

    return <div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPNG} className={s.userPhoto} />
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress} onClick={() => {
                        follow(user.id)
                    }}>Unfollow</button>
                    : <button disabled={followingInProgress} onClick={() => {
                        unFollow(user.id)
                    }}>Follow</button>}

            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{"user.location.country"}</div>
                <div>{'user.location.city'}</div>
            </span>
        </span>
    </div>
}

export default User