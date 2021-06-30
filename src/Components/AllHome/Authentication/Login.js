import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { infocontext } from '../../../App';


const Login = () => {

    const [logged, setLogged] = useContext(infocontext);
    
    
    let history= useHistory();
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        console.log(data);

        fetch(`https://desolate-lowlands-32787.herokuapp.com/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                setLogged(data.admin);
                alert('successfully login as administrator');
                history.push('/home');
            })

    };
    console.log(logged)

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