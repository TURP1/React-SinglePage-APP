import store from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                    action={store.dispatchEvent.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
