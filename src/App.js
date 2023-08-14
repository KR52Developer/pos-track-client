import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./Components/CreatePost";
import CreateUser from "./Components/CreateUser";
import EditPost from "./Components/EditPost";

import Header from "./Components/Header";
import PostList from "./Components/PostList";


function App () {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/create" element={<CreatePost />} />
          <Route path="/user/create" element={<CreateUser />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
