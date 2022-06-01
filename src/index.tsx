import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {state, addPost, changeNewPostTexts, subscribe} from "./state/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from "./state/state";
// import {state, addPost} from "./state/state";


let rerenderEntireTree= () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeNewPostTexts={changeNewPostTexts}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree();

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
