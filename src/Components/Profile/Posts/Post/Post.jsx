import React from 'react';
import obj from './Post.module.css'

const Post = (props) => {

    const PostImagesElement = props.PostImagesData.map(img => {
        return (
            <img className={obj.post__image} src={img.src} alt="" />
        );
    });

    
    return (
        <div className={obj.post}>
            {PostImagesElement}
            {props.message}
            <div>
                <span>{`${props.likeCount} `}likes </span>
            </div>
        </div>
    )
}
export default Post;

