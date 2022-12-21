import React from 'react';
import obj from './Post.module.css'

const Post = (props) => {

    let PostImagesData = [
        { id: 1, src: "https://images.ctfassets.net/419eq8k54vnb/2DGf8OF1z9mQcyDQHodxNv/6ef4083f14fd912cebac09621bdca2b4/logo.png" }
    ]

    const PostImagesElement = PostImagesData.map(img => {
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

