import React, {ChangeEvent, LegacyRef} from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "../../../state/state";

type MyPostPropsType = ProfilePageType & {
    addPost: ()=> void
    changeNewPostTexts: (newText: string) => void
}

const MyPosts: React.FC<MyPostPropsType> = ({postData, addPost, changeNewPostTexts, newPostText, }) => {
    //TODO: id
    const postElement = postData.map(m => {
        return (
            <Post id={m.id} message={m.message} likeCount={m.likeCount}/>
        )
    })

    let newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef();

    let additingPost = () => {
        // @ts-ignore
        let text = newPostElement.current.value;
        //e.currentTarget.value e: ChangeEvent<HTMLTextAreaElement>
        addPost();
        changeNewPostTexts(" ");
    }

    let onPosteCahnge = ()=>{
        // @ts-ignore
        let text = newPostElement.current.value;
        changeNewPostTexts(text);

    }

    return (
        <div>
            <div className={classes.postBlock}>
                <h3>My posts</h3>
                <div>
                    {/*<input type="text"/>*/}
                    <textarea ref={newPostElement}  value={newPostText} onChange={onPosteCahnge}/>
                    <div>
                        <button onClick={additingPost}>Add post
                        </button>
                    </div>
                </div>
                <div className={classes.posts}>
                    {postElement}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;