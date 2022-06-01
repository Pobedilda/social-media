import React from 'react';
import classes from './Post.module.css'

type PostMessage = {
    id: number
    message: string
    likeCount: number
}
const Post: React.FC<PostMessage> = ({message, likeCount}) => {
    return (
        <div className={classes.item}>
            <img src="https://html5css.ru/howto/img_avatar2.png" alt=""/>
            {message}
            <div>
            <span>Like {likeCount}</span>
            </div>
        </div>
    );
};

export default Post;