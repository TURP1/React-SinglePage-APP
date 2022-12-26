import React from 'react';
import obj from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    const PostElement = props.PostsData.map((post) => {
        return (
            <Post message={post.message} likeCount={post.likeCount} PostImagesData={props.PostImagesData} />
        );
    });


    let postsContentHtml = React.createRef();

    let addPost = () => {
        props.newPost(postsContentHtml.current.value);
        clearInput()
    }

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
                    <textarea ref={postsContentHtml}></textarea>
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

