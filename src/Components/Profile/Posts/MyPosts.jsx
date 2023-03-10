import React from 'react';
import obj from './MyPosts.module.css'
import Post from './Post/Post';
import { useForm } from 'react-hook-form';

function PostForm(props) {

    const {
        register,
        handleSubmit,
        resetField
    } = useForm();
    const onSubmit = data => {
        props.onSubmit(data)
        resetField('postText')
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="post" {...register("postText", { maxLength: 180 })} />

            <input type="submit" />
        </form>
    );
}

const MyPosts = (props) => {


    const PostElement = props.postsData.map((post) => {

        return (
            <Post message={post.message} key={post.id} likeCount={post.likeCount} postImagesData={props.postImageData} />
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

