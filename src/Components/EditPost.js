import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    // console.log(id);

    const [post, setPost] = useState({
        username: "",
        description: "",
        duration: 0,
        date: new Date(),

    });

    useEffect(() => {
        axios.get(`https://tough-slug-train.cyclic.cloud/api/v1/posts/${id}`)
            .then((res) => {
                setPost((preValue) => {
                    return {
                        ...preValue,
                        username: res.data.post.username,
                        description: res.data.post.description,
                        duration: res.data.post.duration,
                        date: new Date(res.data.post.date),
                    };
                });
            })
            .catch((error) => console.log(error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((preValue) => {
            return {
                ...preValue,
                [name]: value
            };
        });
        // console.log(post);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        // console.log(post);

        const newPost = {
            username: post.username,
            description: post.description,
            duration: post.duration,
            date: post.date,
        };

        axios
            .put(`https://tough-slug-train.cyclic.cloud/api/v1/posts/${id}`, newPost)
            .then((res) => {
                alert("Post updated successfully");
                navigate("/");
                // console.log(res.data);
            })
            .catch((err) => console.log(err));


    };

    const handleDate = (date) => {
        setPost((preValue) => {
            return {
                ...preValue,
                date: date,
            };
        });
    };

    return (
        <div className="container">
            <h2 className='display-5 text-center mt-5'>Edit Post</h2>
            <form>
                <div className='mb-3'>
                    <label className="form-label">Username</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={post.username}
                        name="username"
                        onChange={handleChange}
                    >
                        <option value={post.username} key={post._id}>{post.username}</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Description"
                        name="description"
                        value={post.description}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Duration</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter duration"
                        name="duration"
                        value={post.duration}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Duration</label>
                    <br />
                    <DatePicker
                        className="form-control"
                        selected={post.date}
                        onChange={handleDate}
                    />
                </div>
                <div className='d-grid gap-2'>
                    <button className='btn btn-success' onClick={handleUpdate}>Update</button>
                    <button className='btn btn-danger'>Cancel</button>
                </div>


            </form>

        </div>
    );
};

export default EditPost;