// DATA
const NEW_POST = "NEW-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const NEW_MESSAGE = "NEW-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "Hello , I `m here", likeCount: 15 },
                { id: 2, message: "My first post", likeCount: 10 }
            ],
            postNewValue: "",
            contentBackgroundsData: [
                { id: 1, src: 'https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/set-background-image-flutter-hero.jpeg?fit=1920%2C1280&ssl=1' }
            ],
            postImagesData: [
                { id: 1, src: "https://images.ctfassets.net/419eq8k54vnb/2DGf8OF1z9mQcyDQHodxNv/6ef4083f14fd912cebac09621bdca2b4/logo.png" }
            ]
        },
        newMessageText: ``,
        users: [
            {
                id: 0, surname: 'Krishna', name: 'Arvind', logo: 'https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg',
                messagesData: [
                    { id: 1, message: "Hi, Im Arvind", user: false },
                    { id: 2, message: "How are You Bro?", user: true },
                    { id: 3, message: "Sup", user: false }
                ]
            },
            {
                id: 1, surname: 'Love', name: 'Christian', logo: 'https://www.logodesignlove.com/wp-content/uploads/2022/01/logo-wave-symbol-01.jpg',
                messagesData: [
                    { id: 1, message: "Hi, Im Christian", user: false },
                    { id: 2, message: "How are You Bro?", user: true },
                    { id: 3, message: "Sup", user: false }
                ]
            },
            {
                id: 2, surname: 'Colive', name: 'Arnold', logo: 'https://fiverr-res.cloudinary.com/f_auto,q_auto,c_fill,g_center/v1/attachments/generic_asset/asset/70135c2d47b4a4892897524eb00e6a9a-1652447155030/logo-4.png',
                messagesData: [
                    { id: 1, message: "Hi, Im Colive", user: false },
                    { id: 2, message: "How are You Bro?", user: true },
                    { id: 3, message: "Sup", user: false }
                ]
            }
        ]

    },
    getState() {
        return this._state;
    },
    renderEntireTree() {
        alert(`qq`)
    },
    subscribe(observer) {
        this.renderEntireTree = observer;
    },

    dispatchEvent(action) {
        if (action.type === "NEW-POST") {
            let newPostInfo = {
                id: 3,
                message: this._state.profilePage.postNewValue,
                likeCount: 0
            };
            this._state.profilePage.postsData.push(newPostInfo)
            this.renderEntireTree(this._state);
        }
        else if (action.type === "UPDATE-POST-TEXT") {
            this._state.profilePage.postNewValue = action.newText;
            this.renderEntireTree(this._state);
        }
        else if (action.type === "NEW-MESSAGE") {
            let newMessageInfo = {
                id: 4,
                message: this._state.newMessageText,
                user: true
            };
            this._state.users[0].messagesData.push(newMessageInfo);
            this.renderEntireTree(this._state);
        }
        else if (action.type === "UPDATE-MESSAGE-TEXT") {
            this._state.newMessageText = action.newText;
            this.renderEntireTree(this._state);
        }
    }
};

export const NEW_POST_ACTION_CREATOR = () => ({ type: NEW_POST });

export const UPDATE_POST_TEXT_ACTION_CREATOR = (text) => (
    { type: UPDATE_POST_TEXT, newText: text });

export const NEW_MESSAGE_ACTION_CREATOR = () => ({ type: NEW_MESSAGE });

export const UPDATE_MESSAGE_TEXT_ACTION_CREATOR = (text) => ({
    type: UPDATE_MESSAGE_TEXT , newText: text
});


window.store = store;

export default store;





