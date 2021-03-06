import React from 'react';
import { useHistory } from 'react-router-dom';
import slugify from 'slugify';
import EditPost from '../Post/EditPost';
import './styles.css';

const PostListItem = props => {
    const { post, clickPost } = props;
    const history = useHistory();

    const handleClickPost = post => {
        const slug = slugify(post.title, { lower: true });

        clickPost(post);
        history.push(`/posts/${slug}`);
    };

    const handleEditPost = post => {
        EditPost(post);
        history.push(`/edit-post/${post._id}`);
    }

    return (
        <div>
            <div className="postListItem" onClick={() => handleClickPost(post)}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
            <div className="postControls">
                <button onClick={() => deletePost(post)}>Delete</button>
            </div>
        </div>
    );
};

export default PostListItem;