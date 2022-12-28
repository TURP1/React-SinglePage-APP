import state, { subscribe, updateMessageText, updatePostText } from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { newPost, newMessage } from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                    newPost={newPost}
                    newMessage={newMessage}
                    updatePostText={updatePostText}
                    updateMessageText={updateMessageText} />
            </BrowserRouter>
        </React.StrictMode>
    );
};

renderEntireTree(state);
subscribe(renderEntireTree);



