const NEW_POST = "NEW-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_POST: {
            let newPostInfo = {
                id: 3,
                message: state.postNewValue,
                likeCount: 0
            };
            state.postsData.push(newPostInfo);
            return state;
        }
        case UPDATE_POST_TEXT: {
            state.postNewValue = action.newText;
            return state;
        }
        default:
            return state;
    }
};

export const NEW_POST_ACTION_CREATOR = () => ({ type: NEW_POST });

export const UPDATE_POST_TEXT_ACTION_CREATOR = (text) => (
    { type: UPDATE_POST_TEXT, newText: text });

export default profileReducer;