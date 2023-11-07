
import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post, deletePost }) => {
    // console.log(post);
    return (
        <tr>
            <td>{post.username}</td>
            <td>{post.description}</td>
            <td>{post.duration}</td>
            <td>{(post.date).slice(0, 10)}</td>
            <td>
                <Link to={`/post/edit/${post._id}`} style={{ textDecoration: "none" }} ><button className='btn btn-secondary'>Edit</button>{" "}</Link>
                <button className='btn btn-danger' onClick={() => deletePost(post._id)}>Delete</button></td>
        </tr>
    );
};

export default Post;