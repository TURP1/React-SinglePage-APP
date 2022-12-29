import React from 'react';
import obj from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    const PostElement = props.profilePage.postsData.map((post) => {
        return (
            <Post message={post.message} likeCount={post.likeCount} postImagesData={props.profilePage.postImagesData} />
        );
    });


    let postsContentHtml = React.createRef();

    let addPost = () => {
        props.newPost();
        clearInput()
    }

    function clearInput() {
        postsContentHtml.current.value = ``;
    }

    const onChangeListener = ()=>{
        let text = postsContentHtml.current.value;
        props.updatePostText(text);
    }

    return (
        <div className={obj.myPosts}>
            <div>
                <div>
                    <h3>My posts</h3>
                </div>
                <div>
                    <textarea ref={postsContentHtml} onFocus={clearInput} onChange={onChangeListener} value={props.profilePage.MyPosts}></textarea>
                </div>
                <div>
                    <button onClick={addPost}> Submit</button>
                </div>


            </div>
            <div>
                <div className={obj.myPostsBlock}>
                    <h4>my News</h4>
                    <div className={obj.newPost}>new post</div>
                    {PostElement}
                </div>
            </div>
        </div>

    )
}
export default MyPosts;

