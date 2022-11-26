import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const OrderModal = ({ product, setProduct , refetch}) => {
    const { user } = useContext(AuthContext);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const { price, name } = product;


    const handleOrder = data => {
        

        const order = {
            
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged){
                    setProduct(null)
                    toast.success(`Booking Successfully Done`)
                    refetch()

                }
                else{
                    setProduct(null)
                    toast.error(data.message)
                }

            })



    }
    return (
        <>
            <input name="" type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='mt-8' onSubmit={handleSubmit(handleOrder)}>
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
                            <button type="submit" className="btn btn-accent">Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default OrderModal;