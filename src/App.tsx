import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialoges/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './components/News';
import Music from './components/Music';
import Settings from "./components/Settings";
import {changeNewPostTexts, RootStateType} from "./state/state";

type AppPropsType = {
    state: RootStateType
    addPost: ()=> void
    changeNewPostTexts: (newText: string) => void
}

const App: React.FC<AppPropsType> = ({state, addPost, changeNewPostTexts }) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={state.SideBar}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs state={state.DialogPage}/>}/>
                        <Route path='/profile' element={<Profile
                            state={state.ProfilePage}
                            addPost={addPost}
                            changeNewPostTexts={changeNewPostTexts}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
