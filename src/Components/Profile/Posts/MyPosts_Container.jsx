import React from 'react';
import MyPosts from './MyPosts';


let PostContainer = props => {
    const onSubmit = (values) => {
        props.addNewPost(values.postText);
    }
    return <MyPosts onSubmit={onSubmit} {...props} />
}

export default  React.memo(PostContainer)



