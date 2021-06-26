import React from 'react';
import { useForm } from 'react-hook-form';


const Login = () => {
    
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        console.log(data);

        fetch(`http://localhost:5000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                alert('successfully login as administrator')
            })

    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className="form-control" type="text" placeholder="Enter your Email" {...register("email", { required: true })} />
                {/* {errors.email && <span>This field is required</span>} */}

                <br />

                <input className="form-control" type="text" placeholder="Enter your Password" {...register("password", { required: true })} />
                {/* {errors.password && <span>This field is required</span>} */}

                <br />

                <input className='btn btn-dark' type="submit" />
            </form>
        </div>
    );
};

export default Login;