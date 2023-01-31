import usersAPI from "../API/api";

const NEW_POST = "NEW-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_CURRENT_PROFILE_REDUCER = "SET_CURRENT_PROFILE_REDUCER";

let initialState = {
    postsData: [
        { id: 1, message: "Hello , I `m here", likeCount: 15 },
        { id: 2, message: "My first post", likeCount: 10 }
    ],
    postNewValue: "",
    postImagesData: [
        { id: 1, src: "https://images.ctfassets.net/419eq8k54vnb/2DGf8OF1z9mQcyDQHodxNv/6ef4083f14fd912cebac09621bdca2b4/logo.png" }
    ],
    currentProfileInfo: {
        aboutMe: null,
        contacts: {
            "facebook": null,
            "website": null,
            "vk": null,
            "twitter": null,
            "instagram": null,
            "youtube": null,
            "github": null,
            "mainLink": null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        userId: null,
        photos: {
            small: null,
            large: null
        }
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_POST: {
            let newPostInfo = {
                id: 3,
                message: state.postNewValue,
                likeCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData,
                    newPostInfo]
            }
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                postNewValue: action.newText
            };
        }
        case SET_CURRENT_PROFILE_REDUCER: {
            return {
                ...state,
                currentProfileInfo: {
                    ...action.profile,
                    aboutMe: action.profile.aboutMe,
                    lookingForAJob: action.profile.lookingForAJob,
                    fullName: action.profile.fullName,
                    userId: action.profile.fullName,
                    photos: {
                        ...action.profile.photos,
                        small: action.profile.photos.small,
                        large: action.profile.photos.large
                    }
                }
            }
        }
        default:
            return state;
    }
};

export const newPost = () => ({ type: NEW_POST });

export const updatePostText = (text) => (
    { type: UPDATE_POST_TEXT, newText: text });
const setCurrentProfileInfo = (profile) => (
    { type: SET_CURRENT_PROFILE_REDUCER, profile });

export const getUserThunkAC = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setCurrentProfileInfo(response.data));
            })
    }
}

export default profileReducer;