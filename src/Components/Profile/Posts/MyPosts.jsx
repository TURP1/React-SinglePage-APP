import React from 'react';
import obj from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    const PostsData = [
        { id: 1, message: "Hello , I `m here", likeCount: 15 },
        { id: 2, message: "My first post", likeCount: 10 }
    ];

    const PostElement = PostsData.map((post) => {
        return (
            <Post message={post.message} likeCount={post.likeCount} />
        );
    });


    return (
        <div className={obj.myPosts}>
            <div>
                <div>
                    <h3>My posts</h3>
                </div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button> Submit</button>
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

