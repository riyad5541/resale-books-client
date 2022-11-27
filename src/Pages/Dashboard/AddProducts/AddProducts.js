import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddProduct = data => {
        // const image = data.image[0];
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(res => res.json())
        // .then(imgData => {
        //     if(imgData.success){
        //         console.log(imgData.data.url);
        //         const doctor = {
        //             name: data.name, 
        //             email: data.email,
        //             specialty: data.specialty,
        //             image: imgData.data.url
        //         }

        //         // save doctor information to the database
        //         fetch('https://doctors-portal-server-rust.vercel.app/doctors', {
        //             method: 'POST',
        //             headers: {
        //                 'content-type': 'application/json', 
        //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
        //             },
        //             body: JSON.stringify(doctor)
        //         })
        //         .then(res => res.json())
        //         .then(result =>{
        //             console.log(result);
        //             toast.success(`${data.name} is added successfully`);
        //             navigate('/dashboard/managedoctors')
        //         })
        //     }
        // })
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add Product</h2>

            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="text" {...register("price", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <input type="text" {...register("condition", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Mobile Number</span></label>
                    <input type="text" {...register("mobilenumber", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
            </form>

        </div>
    );
};

export default AddProducts;