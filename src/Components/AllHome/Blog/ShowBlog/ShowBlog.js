import React, { useEffect, useState } from 'react';
import MapShowBlog from '../MapShowBlog/MapShowBlog';

const ShowBlog = () => {
    const [showBlog, setShowBlog] = useState([]);
    console.log(showBlog);
    useEffect(() => {
        fetch('http://localhost:5000/showBlog')
            .then(res => res.json())
            .then(data => setShowBlog(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
                <h3 className="mt-5">All Posts</h3>
                {
                    showBlog.map(blog => <MapShowBlog blog={blog}></MapShowBlog>)
                }
            </div>
        </div>
    );
};

export default ShowBlog;