import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {


    const navigate = useNavigate();
    const [post, setPost] = useState({
        username: "",
        description: "",
        duration: 5,
        date: new Date(),
        users: []
    });

    useEffect(() => {
        axios.get("https://tough-slug-train.cyclic.cloud/api/v1/users")
            .then((res) => {
                setPost((preValue) => {
                    return {
                        ...preValue,
                        users: res.data.users,
                        username: res.data.users[0].username,
                    };
                });
            })
            .catch((error) => console.log(error));



    }, []);

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

    const handleCreate = (e) => {
        e.preventDefault();
        // console.log(post);

        const newPost = {
            username: post.username,
            description: post.description,
            duration: post.duration,
            date: post.date,
        };

        axios
            .post("https://tough-slug-train.cyclic.cloud/v1/posts/create", newPost)
            .then((res) => {
                alert("New post created successfully");
                navigate("/");
                console.log(res.data);
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
            <h2 className='display-5 text-center mt-5'>Create Post</h2>
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


                        {post.users.map((user) => {
                            return (
                                <option value={user.username} key={user._id}>{user.username}</option>
                            );
                        })}
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
                    <button className='btn btn-success' onClick={handleCreate}>Create Post</button>
                    <button className='btn btn-danger'>Cancel</button>
                </div>


            </form>

        </div>
    );
};

export default CreatePost;