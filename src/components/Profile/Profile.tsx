import { serverGetProfileType } from '../../redux/profileReducer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type profilePropsType = {
  profile: null | serverGetProfileType,
  status: string,
  updateUserStatus: (status: string)=> void
}

const Profile = (props: profilePropsType) => {
  return <div>
    <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
    <MyPostsContainer />
  </div>
}

export default Profile