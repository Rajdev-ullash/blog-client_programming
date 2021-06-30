import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import swal from 'sweetalert';

const ManageService = () => {
    const [manageBlog, setmanageBlog] = useState([])
    console.log(manageBlog)
    // console.log(servicess.name)
    useEffect(() =>{
        fetch('https://desolate-lowlands-32787.herokuapp.com/showBlog')
        .then(res => res.json())
        .then(data => setmanageBlog(data))
    }, [manageBlog])


    const deleteEvent = (id) => {
        fetch(`https://desolate-lowlands-32787.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this imaginary file!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });
                            } else {
                                swal("Your imaginary file is safe!");
                            }
                        });
                    // alert('Your event deleted successfully');

                }
            })
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Blog Id</th>
                                <th scope="col">Blog Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                manageBlog.map((service) => (
                        
                                        <tr key={service._id}>
                                            <td>{service._id}</td>
                                            <td>{service.blogName}</td>
                                            <td><button onClick={() => deleteEvent(service._id)} className="btn btn-primary">Delete</button></td>
                                        </tr>
                                   
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageService;