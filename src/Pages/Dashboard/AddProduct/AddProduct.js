import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext)
    const { handleSubmit, register, formState: { errors } } = useForm();
    const imgHostingApiKey = process.env.REACT_APP_imgbb_api_key;

    const { data: categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`);
            const data = await res.json();
            return data
        }
    })

    const handleAddProduct = data => {
        const image = data.product_img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostingApiKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);

                const product ={
                    name: data.seller,
                    email: data.email,
                    categoryId: data.categoryId,
                    image: imgData.data.url

                }


                console.log(product)

                // fetch(`http://localhost:5000/products`, {
                //     method: 'POST',
                //     headers: {
                //         'content-type' : 'application/json',
                //         authorization: `bearer ${localStorage.getItem('accessToken')}`
                //     },
                //     body: JSON.stringify(product)
                // })
                // .then(res => res.json())
                // .then(data =>{
                //     if(data.acknowledged){
                //         toast.success(`Product added successfully`);
                //     }
                // })
            }
        })

    }

    return (
        <div className='lg:w-1/2 p-6'>
            <h2 className='text-3xl mb-5'>Add A Product</h2>
            <form className='mt-8 ' onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" readOnly defaultValue={user?.displayName} {...register("seller")} placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" readOnly defaultValue={user?.email} {...register("email")} placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select {...register("categoryId")} className="select select-bordered w-full ">
                        {
                            categories.map(category => <option defaultValue={category._id}
                                key={category._id}
                                vlaue={category._id}
                            >{category.category}</option>)
                        }

                    </select>
                </div>
                <div className="form-control">
                    <label className="label"></label>
                    <input type="file" {...register("product_img")} placeholder="Photo Upload" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn bg-red-600 text-white border-none">Add A Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
