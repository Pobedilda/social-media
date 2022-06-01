import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changeNewPostTexts, ProfilePageType} from "../../state/state";

type ProfileType = {
    state: ProfilePageType
    addPost: ()=> void
    changeNewPostTexts: (newText: string) => void
}

const Profile: React.FC<ProfileType> = ({state, addPost, changeNewPostTexts}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={state.postData} newPostText={state.newPostText} addPost={addPost} changeNewPostTexts={changeNewPostTexts}/>
        </div>
    );
};

export default Profile;