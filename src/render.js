import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { newPost, newMessage } from "./Redux/state";


export let rerenderEntireTree = (props) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={props.state} newPost={newPost} newMessage={newMessage} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

