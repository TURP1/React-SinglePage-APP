import React from 'react';
import { NEW_POST_ACTION_CREATOR, UPDATE_POST_TEXT_ACTION_CREATOR } from '../../../Redux/state';
import obj from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    const PostElement = props.profilePage.postsData.map((post) => {
        return (
            <Post message={post.message} likeCount={post.likeCount} postImagesData={props.profilePage.postImagesData} />
        );
    });


    let postsContentHtml = React.createRef();

    const addPost = () => {
        props.action(NEW_POST_ACTION_CREATOR());
        clearInput();
    }

    function clearInput() {
        postsContentHtml.current.value = ``;
    }

    const onChangeListener = () => {
        let text = postsContentHtml.current.value;
        props.action(UPDATE_POST_TEXT_ACTION_CREATOR(text));
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
                        value={props.profilePage.MyPosts} />
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

