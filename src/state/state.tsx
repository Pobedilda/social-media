
let rerenderEntireTree: ()=>void;

export type MyPostType = {
    id: number
    message: string
    likeCount: number
}
export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}
type FriendsType = {
    id: number
    name: string
}

export type ProfilePageType = {
    postData: Array<MyPostType>
    newPostText: string
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    message: Array<MessageType>
}

export type SideBar = {
    friends: Array<FriendsType>
}
export type RootStateType = {
    ProfilePage: ProfilePageType
    DialogPage: DialogPageType
    SideBar: SideBar
}
export const state: RootStateType = {
    ProfilePage: {
        postData: [
            {id: 1, message: 'Hi', likeCount: 11},
            {id: 2, message: "Ky", likeCount: 112},
            {id: 3, message: "GRtEW", likeCount: 111},
        ],
        newPostText:"",
    },
    DialogPage: {
        dialogs: [
            {id: 1, name: 'Va'},
            {id: 2, name: "Gosha"},
            {id: 3, name: "Tanya"},
            {id: 4, name: "Alena"},
        ],
        message: [
            {id: 1, message: 'Hig'},
            {id: 2, message: "Hig"},
            {id: 3, message: "Hey"},
            {id: 4, message: "Ky"},
        ],
    },
    SideBar: {
        friends: [
            {id: 1, name: "GG"},
            {id: 2, name: "HH"},
        ]
    }
}

export const addPost = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    let newPost = {
        id: 5,
        message: state.ProfilePage.newPostText,
        likeCount: 0
    };

    state.ProfilePage.postData.push(newPost)
    rerenderEntireTree();
}
export const changeNewPostTexts = (newText: string) => {

    state.ProfilePage.newPostText = newText;
    rerenderEntireTree();
}

export const subscribe = (observer:()=>void)=>{
    rerenderEntireTree = observer;
}