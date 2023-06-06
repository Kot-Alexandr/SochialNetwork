import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
messeage: string
likeCount: number
}

const Post = (props: PostPropsType) => {
  return <div className={s.item}>
    <img src='data:image/jpeg;base64,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'/>
    {props.messeage}
    <div>
      <span className={s.like}>Like {props.likeCount}</span>
    </div>
  </div>
}

export default Post