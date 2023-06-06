import { OmitProps } from 'antd/lib/transfer/ListBody';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

const DialogItem = (props: any) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}><img src="http://disneydarkside.weebly.com/uploads/2/6/7/7/26777662/614874915.jpg"/><NavLink to={path}>{props.name}</NavLink></div>
    )
}


export default DialogItem