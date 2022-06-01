import React from 'react';
import style from './../Dialogs.module.css'



export type MessageProps = {
    id:number
    message: string
}

export const Message: React.FC<MessageProps> = ({message}) => {
    return <div className={style.message}>{message}</div>
}

