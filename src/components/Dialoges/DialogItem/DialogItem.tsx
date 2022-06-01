import React from 'react';
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../state/state";



export type DialogItemProps = DialogType & {

}

export const DialogItem: React.FC<DialogItemProps> = ({id, name}) => {
    let path = "/dialogs/" + id;
    return (<div className={style.dialog + ' ' + style.active}>
        <NavLink to={path}>{name}</NavLink>
    </div>)
}




