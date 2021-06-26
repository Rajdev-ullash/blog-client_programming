import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
    return (

        <div>
            <div className="sidebar">
                <Link className="active" to="/">Home</Link>
                <Link to="/createBlog">Create Blog</Link>
                <Link to="/manageblog">ManageBlog</Link>
                <Link href="#about">About</Link>
            </div>


            <div className="content">
            
      </div>

        </div>
    );
};

export default Sidebar;