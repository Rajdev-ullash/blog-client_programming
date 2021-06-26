import React, { useState } from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";
import './MapShowBlog.css'
import { Link } from 'react-router-dom';
// import Reaction from './../Reaction/Reaction';
// import Reactions from '../Reaction/Reactions';
// import { FacebookSelector } from 'react-reactions';
// import Picker from 'emoji-picker-react';

const MapShowBlog = ({ blog }) => {
    console.log(blog)

    // const [count, setCount] = useState(0);
    // const [chosenEmoji, setChosenEmoji] = useState(null);

    // const onEmojiClick = (event, emojiObject) => {
    //     setChosenEmoji(emojiObject);
    // };



    return (

        <div className="col-md-6">
            <div className="">
                <Link to={`/blog/${blog._id}`} className="mt-5 justify-content-center align-items-center d-flex">
                    <img className="img-fluid" style={{ width: '50%', backgroundSize: 'cover' }} src={blog.imageURL} alt="" />
                </Link>
                <div className="mt-4 justify-content-center align-items-center d-flex">
                    <div>
                        <Link to={`/blog/${blog._id}`} className="mt-3 ms-3 text-dark">
                            <h3 >{blog.blogName}</h3>
                        </Link>
                        <div className="mt-3 ms-3">
                            <div >
                                {/* <p>{blog.name}</p> */}
                                <p>Post Time: {blog.postTime}</p>

                            </div>
                        </div>
                    </div>

                    {/* <div className="mt-3 ms-3">
                        <ReactReadMoreReadLess className="text-light"
                            charLimit={100}
                        // readMoreText={"Continue Reading ▼"}
                        // readLessText={"Read less ▲"}
                        // readMoreClassName="read-more-less--more"
                        // readLessClassName="read-more-less--less"
                        >
                            {blog.description}
                        </ReactReadMoreReadLess>
                    </div> */}
                </div>
            </div>
        </div>

    );
};

export default MapShowBlog;