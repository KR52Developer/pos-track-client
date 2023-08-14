import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from './Post';

const PostList = () => {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://tough-slug-train.cyclic.cloud/api/v1/posts")
            .then((res) => setPosts(res.data.posts))
            .catch((error) => console.log(error));
    }, []);

    // console.log(posts);

    const deletePost = (id) => {
        if (window.confirm("Are sure to delete the post?")) {
            axios.delete(`https://tough-slug-train.cyclic.cloud/api/v1/posts/${id}`)
                .then((res) => {
                    alert("Post Deleted Successfully");
                    console.log(res.data);
                    window.location.reload();
                })
                .catch((err) => console.log(err));
        }

    };

    return (
        <div className='container'>
            <h2 className='display-5 text-center mt-5'>Post List</h2>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th> UserName</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <Post key={post._id} post={post} deletePost={deletePost} />
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default PostList;