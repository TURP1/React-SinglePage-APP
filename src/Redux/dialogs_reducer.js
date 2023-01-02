const NEW_MESSAGE = "NEW-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {

    let newMessageInfo;

    switch (action.type) {
        case NEW_MESSAGE: {
             newMessageInfo = {
                id: 4,
                message: state.newMessageText,
                user: true
            };
            state.users[0].messagesData.push(newMessageInfo);
            return state;
        }
        case UPDATE_MESSAGE_TEXT: {
            state.newMessageText = action.newText;
            return state;
        }
        default:
            return state;
    }
};

export const NEW_MESSAGE_ACTION_CREATOR = () => ({ type: NEW_MESSAGE });

export const UPDATE_MESSAGE_TEXT_ACTION_CREATOR = (text) => ({
    type: UPDATE_MESSAGE_TEXT, newText: text
});

export default dialogsReducer;