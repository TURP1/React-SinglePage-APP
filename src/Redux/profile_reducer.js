import { reset } from "redux-form";
import { profileAPI } from "../API/api";


const NEW_POST = "NEW-POST";
const SET_CURRENT_PROFILE_REDUCER = "SET_CURRENT_PROFILE_REDUCER";
const SET_CURRENT_PROFILE_STATUS = "SET_CURRENT_PROFILE_STATUS"

let initialState = {
    postsData: [
        { id: 1, message: "Hello , I `m here", likeCount: 15 },
        { id: 2, message: "My first post", likeCount: 10 }
    ],
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
    },
    currentProfileStatus: "default status"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_POST: {
            let newPostInfo = {
                id: 3,
                message: action.newText,
                likeCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData,
                    newPostInfo]
            }
        }

        case SET_CURRENT_PROFILE_REDUCER: {
            return {
                ...state,
                currentProfileInfo: {
                    ...action.profile,
                    aboutMe: action.profile.aboutMe,
                    lookingForAJob: action.profile.lookingForAJob,
                    fullName: action.profile.fullName,
                    userId: action.profile.userId,
                    photos: {
                        ...action.profile.photos,
                        small: action.profile.photos.small,
                        large: action.profile.photos.large
                    }
                }
            }
        }
        case SET_CURRENT_PROFILE_STATUS: {
            return {
                ...state,
                currentProfileStatus: action.status
            }
        }
        default:
            return state;
    }
};

const newPost = (text) => (
    { type: NEW_POST, newText: text });

const setCurrentProfileInfo = (profile) => (
    { type: SET_CURRENT_PROFILE_REDUCER, profile });

const setCurrentProfileStatus = (status) => (
    { type: SET_CURRENT_PROFILE_STATUS, status });

export const getUser = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setCurrentProfileInfo(response.data));
            })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setCurrentProfileStatus(response.data));
            })
    }
}
export const changeStatus = (status) => {
    return (dispatch) => {
        profileAPI.changeStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setCurrentProfileStatus(status));
                }

            })
    }
}
export const addNewPost = (text) => {
    return (dispatch) => {
        dispatch(newPost(text))
        dispatch(reset('postForm'))
    }

}






export default profileReducer;