

// DATA
let state = {
    ProfilePage: {
        PostsData: [
            { id: 1, message: "Hello , I `m here", likeCount: 15 },
            { id: 2, message: "My first post", likeCount: 10 }
        ],
        ContentBackgroundsData: [
            { id: 1, src: 'https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/set-background-image-flutter-hero.jpeg?fit=1920%2C1280&ssl=1' }
        ],
        PostImagesData: [
            { id: 1, src: "https://images.ctfassets.net/419eq8k54vnb/2DGf8OF1z9mQcyDQHodxNv/6ef4083f14fd912cebac09621bdca2b4/logo.png" }
        ]
    },
    Users: [
        {
            id: 0, surname: 'Krishna', name: 'Arvind', logo: 'https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg',
            MessagesData: [
                { id: 1, message: "Hi, Im Arvind", user: false },
                { id: 2, message: "How are You Bro?", user: true },
                { id: 3, message: "Sup", user: false }
            ]
        },
        {
            id: 1, surname: 'Love', name: 'Christian', logo: 'https://www.logodesignlove.com/wp-content/uploads/2022/01/logo-wave-symbol-01.jpg',
            MessagesData: [
                { id: 1, message: "Hi, Im Christian", user: false },
                { id: 2, message: "How are You Bro?", user: true },
                { id: 3, message: "Sup", user: false }
            ]
        },
        {
            id: 2, surname: 'Colive', name: 'Arnold', logo: 'https://fiverr-res.cloudinary.com/f_auto,q_auto,c_fill,g_center/v1/attachments/generic_asset/asset/70135c2d47b4a4892897524eb00e6a9a-1652447155030/logo-4.png',
            MessagesData: [
                { id: 1, message: "Hi, Im Colive", user: false },
                { id: 2, message: "How are You Bro?", user: true },
                { id: 3, message: "Sup", user: false }
            ]
        }
    ]

};

let rerenderEntireTree = () => {
    alert(`qq`)
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export const newPost = (postMessage) => {
    let newPostInfo = {
        id: 3,
        message: postMessage,
        likeCount: 0
    };
    state.ProfilePage.PostsData.push(newPostInfo)
    rerenderEntireTree(state);
};

export const newMessage = (newMessage, userId) => {
    let newMessageInfo = {
        id: 4,
        message: newMessage,
        user: true
    };
    state.Users[userId].MessagesData.push(newMessageInfo);
    rerenderEntireTree(state);
};

export default state;





