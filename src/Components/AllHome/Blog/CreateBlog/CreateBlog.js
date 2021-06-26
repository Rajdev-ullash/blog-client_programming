import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { UserContext } from '../../../../App';
// import Sidebar from '../../Sidebar/Sidebar';
import Sidebar from '../../Sidebar/Sidebar'


const CreateBlog = () => {
    // const { log } = useContext(UserContext);
    // const [loggedIn, setLoggedIn] = log;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        console.log(data)
        const eventData = {
            blogName: data.name,
            description: data.description,
            imageURL: imageURL,
            // ...loggedIn,
            postTime: new Date()
        }
        const url = `http://localhost:5000/blogPost`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                if (res) {
                    alert('Your blog has been added successfully');
                }
            })
    };


    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '7684772cfe35d7b1d344467f4a18bdba');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 m-sm-3 p-sm-5 bg-primary">
                <h1>blog</h1>
                <form className=" mt-5 rounded me-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-5">
                        <div className="mb-3">
                            <label for="name" className="form-label text-white">Blog Tittle</label>
                            <input name="name" className="form-control" defaultValue="Blog Title" {...register("name", { required: true, maxLength: 80 })} />
                        </div>
                        <div className="mb-3">
                            <label for="Description" className="form-label text-white">Blog Description</label>
                            <textarea row="8" name="description" type="text" className="form-control" defaultValue="Blog Description" {...register("description", { required: true})} />
                            {errors.description && <span>This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <label for="exampleRequired" className="form-label text-white">Choose a Picture</label>
                            <input name="exampleRequired" onChange={handleImageUpload} className="form-control" type="file" />
                        </div>

                        <div className="mb-3 justify-content-center align-item-center d-flex">
                            <input className="btn btn-warning" type="submit" />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateBlog;