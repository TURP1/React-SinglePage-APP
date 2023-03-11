

const NEW_MESSAGE = "NEW-MESSAGE";

let initialState = {
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
}


const dialogsReducer = (state = initialState, action) => {
    let newMessageInfo;

    switch (action.type) {
        case NEW_MESSAGE: {
            newMessageInfo = {
                id: 4,
                message: action.newText,
                user: true
            };

            let newState = {
                ...state,
                users: [...state.users]
            };
            for (const i of newState.users) {
                newState.users[i] = { ...state.users[i] };
            }
            newState.users[0].messagesData = [...state.users[0].messagesData];
            newState.users[0].messagesData.push(newMessageInfo);
            return newState;
        }
        default:
            return state;
    }
};

const newMessage = (text) => ({ type: NEW_MESSAGE, newText: text });

export const addNewMessage = (text) => {
    return(dispatch) => {
        dispatch(newMessage(text));

    }
}



export default dialogsReducer;