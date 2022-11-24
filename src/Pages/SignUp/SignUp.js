import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser, updateUser} =useContext(AuthContext);


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
            .then(()=>{})
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
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
                        <select {...register("seller", {
                            required: "Please one option seller/buyer"
                        })} className="select w-full input-bordered">
                            <option value="seller">Seller</option>
                            <option value="buyer">Buyer</option>
                        </select>
                        {errors.seller && <p className='text-red-600'>{errors.seller?.message}</p>}
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
                    <button className="btn bordered-accent text-accent hover:bg-white bg-white">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div >
    );
};

export default SignUp;