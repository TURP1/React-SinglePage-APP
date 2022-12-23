import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// DATA
//PostsData
let PostsData = [
  { id: 1, message: "Hello , I `m here", likeCount: 15 },
  { id: 2, message: "My first post", likeCount: 10 }
];
let ContentBackgroundsData = [
  { id: 1, src: 'https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/set-background-image-flutter-hero.jpeg?fit=1920%2C1280&ssl=1' }
];

let PostImagesData = [
  { id: 1, src: "https://images.ctfassets.net/419eq8k54vnb/2DGf8OF1z9mQcyDQHodxNv/6ef4083f14fd912cebac09621bdca2b4/logo.png" }
];
//DialogsData
let MessagesData = [
  { id: 1, message: "Hi, Im Sasha" },
  { id: 2, message: "How are You Bro?" },
  { id: 3, message: "Sup" }
];
let DialogsData = [
  { id: 1, userName: "Sasha" },
  { id: 2, userName: "Ivan" },
  { id: 3, userName: "Leroy" },
  { id: 4, userName: "Leo" },
  { id: 5, userName: "Vlad" },
];

let generalProfileDataArray = [
  PostsData, ContentBackgroundsData, PostImagesData
];

let generalMessageDataArray = [
  MessagesData, DialogsData
]




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App generalProfileDataArray={generalProfileDataArray} 
      generalMessageDataArray={generalMessageDataArray}/>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
