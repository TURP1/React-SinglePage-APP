import React from 'react';
import obj from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
debugger
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
                    <h3>My posts</h3>
                </div>
                <div>
                    <textarea ref={postsContentHtml}
                        onFocus={clearInput}
                        onChange={onChangeListener}
                        value={props.newValue} />
                </div>
                <div>
                    <button onClick={onAddPost}> Submit</button>
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

