import store from './Redux/redux_store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        </React.StrictMode>
    );
};

renderEntireTree();
store.subscribe( ()=>{
    renderEntireTree(store.getState());
});
