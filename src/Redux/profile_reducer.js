const NEW_POST = "NEW-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const profileReducer = (state, action) => {
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