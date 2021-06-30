import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { _id } = useParams()
    console.log(_id)

    const [BlogInfo, setBlogInfo] = useState([]);
    console.log(BlogInfo);
    useEffect(() =>{
        fetch('https://desolate-lowlands-32787.herokuapp.com/showBlog')
        .then(res => res.json())
        .then(data => setBlogInfo(data))
    }, [])

    const BlogFind = BlogInfo.find(blog => blog?._id === _id)
    console.log(BlogFind)

    return (
        <div>
           <div className="col-md-12 justify-content-center align-content-center d-flex">
                <div className="">
                    <div className="mt-5">
                        <img className="img-fluid" style={{ width: '80%', backgroundSize: 'cover' }} src={BlogFind?.imageURL} alt="" />
                    </div>
                    <div className="mt-4">
                        <div className="mt-3 ms-3">
                            <h3>{BlogFind?.blogName}</h3>
                        </div>
                        <div className="mt-3 ms-3">
                            <div >
                                {/* <p>{blog.name}</p> */}
                                <p>{BlogFind?.postTime}</p>

                            </div>
                        </div>

                        <div className="mt-3 ms-3">
                                {BlogFind?.description}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default BlogDetails;