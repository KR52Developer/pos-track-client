import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    // console.log(user);

    const handleCreate = (e) => {
        e.preventDefault();
        // axios.post("http:localhost:5000/api/v1/users/create", { username: user, })
        axios
            .post("https://tough-slug-train.cyclic.cloud/api/v1/users/create", {
                username: user,
            })
            .then(() => {
                alert("User created successfully");
                navigate("/");
            })
            .catch((error) => console.log(error));

    };
    return (
        <div className='container'>
            <h2 className='display-5 text-center mt-5'>Create user</h2>
            <form>
                <label className="form-label">Username</label>
                <div>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter UserName"
                        name="username"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <div className='d-grid gap-2 mt-3'>
                    <button className='btn btn-success'
                        onClick={handleCreate}
                    >Submit</button>
                    <button className='btn btn-danger'>Cancel</button>
                </div>
            </form >
        </div>
    );
};

export default CreateUser;