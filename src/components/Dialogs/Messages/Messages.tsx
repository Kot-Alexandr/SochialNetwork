import { OmitProps } from 'antd/lib/transfer/ListBody';
import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from '../DiologsItems/DialogsItems';
import s from './../Dialogs.module.css'




const Message = (props: any) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message 