import React from 'react';
import obj from './MyPosts.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import  { maxLength300, Textarea } from '../../common/FormControls/FormControls';


export let PostForm = props => {

    const { handleSubmit } = props

    return <form onSubmit={handleSubmit}>{
        <div>
            <Field cols="50" rows="3" type="text" component={Textarea}
                name="postText" className={obj.myPosts_textarea} validate={maxLength300} />
            <button type="submit">Submit</button>
        </div>
    }</form>
}

PostForm = reduxForm({
    form: 'postForm'
})(PostForm)


const MyPosts = (props) => {


    const PostElement = props.postsData.map((post) => {

        return (
            <Post message={post.message} likeCount={post.likeCount} postImagesData={props.postImageData} />
        );
    });


    return (

        <div className={obj.myPosts}>
            <div>
                <div>
                    <h2>My posts</h2>
                </div>
                <PostForm onSubmit={props.onSubmit} />
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

