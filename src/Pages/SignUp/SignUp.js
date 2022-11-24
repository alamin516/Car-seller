import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser, updateUser, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate()


    const handleSignUp = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            const userInfo ={
                displayName: data.name

            }
            updateUser(userInfo)
            .then(()=>{
                navigate('/')
                saveUserDb(data.name, data.email, data.role)

            })
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    }

    const saveUserDb = (name, email, role) => {
        const user = { name, email , role}

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('User save', data)
                getToken(email)
            })
    }

    const handleSignInWithGoogle = () =>{
        signInWithGoogle()
        .then((result)=>{
            const user = result.user;
            console.log(user);
            navigate('/')
        })
        .catch(error => console.error(error))
    }


    const getToken = email =>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('Access-token', data.accessToken)
        })
    }

    return (
        <div className='min-h-screen flex justify-center items-center p-6'>
            <div className='lg:w-4/12 p-6 shadow-lg rounded-xl'>
                <h2 className='text-center text-xl'>Sign Up</h2>
                <form className='mt-8' onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: 'Name is required'

                        })} placeholder="name" className="input input-bordered" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: 'Email Address is required'

                        })} placeholder="email" className="input input-bordered" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller/Buyer</span>
                        </label>
                        <select {...register("role", {
                            required: "Please one option seller/buyer"
                        })} className="select w-full input-bordered">
                            <option value="seller">Seller</option>
                            <option value="buyer">Buyer</option>
                        </select>
                        {errors.role && <p className='text-red-600'>{errors.role?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",
                            {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters'
                                },
                                // maxLength: {
                                //     value: 20,
                                //     message: 'Password must be less than 20 characters'
                                // },
                                // pattern: {
                                //     value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                //     message: "Password must be strong"
                                // }


                            })} placeholder="password" className="input input-bordered" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-accent">Sign Up</button>
                    </div>
                </form>
                <div className='text-center'>
                    <p className='my-6'>Already have an account? <Link className='text-primary' to='/login'>Please login</Link></p>
                    <div className="divider text-xl font-bold">OR</div>
                </div>
                <div className="form-control mt-6">
                    <button onClick={handleSignInWithGoogle} className="btn bordered-accent text-accent hover:bg-white bg-white">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div >
    );
};

export default SignUp;