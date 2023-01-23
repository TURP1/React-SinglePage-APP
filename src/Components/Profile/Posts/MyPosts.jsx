import React from 'react';
import obj from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    const PostElement = props.postsData.map((post) => {
        return (
            <Post message={post.message} likeCount={post.likeCount} postImagesData={props.postImageData} />
        );
    });

    let postsContentHtml = React.createRef();

    const onAddPost = () => {
        props.newPost();
        clearInput();
    };
    const onChangeListener = () => {
        let text = postsContentHtml.current.value;
        props.updatePostText(text);
    };

    function clearInput() {
        postsContentHtml.current.value = ``;
    }

    return (
        <div className={obj.myPosts}>
            <div>
                <div>
                    <h2>My posts</h2>
                </div>
                <div>
                    <textarea cols="50" rows="3" className={obj.myPosts_textarea} ref={postsContentHtml}
                        onFocus={clearInput}
                        onChange={onChangeListener}
                        value={props.newValue} />
                </div>
                <div>
                    <button className={obj.myPosts__addPost_btn} onClick={onAddPost}> Submit</button>
                </div>
            </div>

            <div>
                <div className={obj.myPostsBlock}>
                    <h3>my News</h3>
                    <div className={obj.newPost}>new post</div>
                    {PostElement}
                </div>
            </div>
        </div>

    )
}
export default MyPosts;

