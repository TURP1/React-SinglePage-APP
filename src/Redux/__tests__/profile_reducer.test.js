import   profileReducer, {deletePost, newPost}  from "../profile_reducer";

let state = {
    postsData: [
        { id: 1, message: "Hello , I `m here", likeCount: 15 },
        { id: 2, message: "My first post", likeCount: 10 }
    ]
}

it('should add new post', () => {
    //Arrange - Организовывать
    let action = newPost("new Text")
    //Act - Действовать
    let newState = profileReducer(state, action)
    //Assert - Утверждать
    expect(newState.postsData.length).toBe(3)
});

it('should add correct text', () => {
    let action = newPost("new Text")
    let newState = profileReducer(state, action)

    expect(newState.postsData[2].message).toBe("new Text")
});


///Test Drive Development
it('should decrease messages count', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(1)
});

it('should left the right count of messages id id mot correct', () => {
    let action = deletePost(845)
    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(2)
});

