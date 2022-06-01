import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../state/state";

type DialogPropsType = {
    state: DialogPageType
}
const Dialogs: React.FC<DialogPropsType> = ({state}) => {
    const dialogsElements = state.dialogs.map(m => {
        return (
            <DialogItem id={m.id} name={m.name} />
        )
    })
    const messageElements = state.message.map(m => {
        return (
            <Message id={m.id} message={m.message} />
        )
    })
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
                {/*<DialogItem name={"Gosha"} id={1}/>*/}
                {/*<DialogItem name={"Tanya"} id={2}/>*/}
                {/*<DialogItem name={"Alena"} id={3}/>*/}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>

        </div>
    );
};

export default Dialogs;