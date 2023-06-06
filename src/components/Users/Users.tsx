import { userType } from '../../redux/usersReducers'
import Paginator from '../Common/Paginator/Paginator'
import User from './User'


type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<userType>
    followingInProgress: boolean
    onPageChanged: (page: number) => void
    follow: (id: number) => void
    unFollow: (id: number) => void
}


let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, followingInProgress, follow, unFollow, ...props }: UsersType) => {

    return <>
        <Paginator portionSize={10} currentPage={currentPage} totalUsersCount={totalUsersCount} onPageChanged={onPageChanged} pageSize={pageSize} />
        {
            props.users.map((el, index) => <User key={index} user={el} followingInProgress={followingInProgress} follow={follow} unFollow={unFollow} />)
        }
    </>
}

export default Users