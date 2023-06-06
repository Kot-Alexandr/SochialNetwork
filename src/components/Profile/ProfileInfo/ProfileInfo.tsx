import React from 'react';
import { serverGetProfileType } from '../../../redux/profileReducer';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import { Preloader } from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

type profileInfoPropsType = {
  profile: null | serverGetProfileType
  updateUserStatus: (status: string) => void
  status: string
}

const ProfileInfo = (props: profileInfoPropsType) => {

  if (!props.profile) {
    return <Preloader />
  }

  return <div>
    <div className={s.mainTitle}>
      <img src="https://cs8.pikabu.ru/post_img/big/2017/02/07/0/1486418255177046405.jpg" />
    </div>
    <span>
      <div className={s.avatar}>
        {props.profile.photos.large !== null ? <img src={props.profile.photos.large} /> : <img src="https://cs8.pikabu.ru/post_img/big/2017/02/07/0/1486418255177046405.jpg" />}
        <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
      </div>
    </span>
    <div>Hey! It's about me: {props.profile.aboutMe}</div>
    <div>Am I in looking for Job?: {props.profile.lookingForAJob ? "Yoooo Man, I'm only waiting for your offer" : "I'm a boss of my gym, don't need other gym"}</div>
    <div>Job descriptions: {props.profile.lookingForAJobDescription}</div>

    <span>
      <div>facebook: {props.profile.contacts.facebook}</div>
      <div>website: {props.profile.contacts.website}</div>
      <div>vk: {props.profile.contacts.vk}</div>
      <div>twitter: {props.profile.contacts.twitter}</div>
      <div>instagram: {props.profile.contacts.instagram}</div>
      <div>youtube: {props.profile.contacts.youtube}</div>
      <div>github: {props.profile.contacts.github}</div>
      <div>mainLink: {props.profile.contacts.mainLink}</div>
    </span>

  </div>
}

export default ProfileInfo