import { useForm } from "react-hook-form";
import image from '../../assets/login.png'
import { Link, useNavigate } from "react-router-dom";
import SocilaLogin from "../../Components/SocialLogin/SocilaLogin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser= { name: data.name, email: data.email }
                        console.log(saveUser);
                        fetch('http://localhost:5000/users', {
                            method: "POST",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.insertedId) {

                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })

                    })
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="grid md:grid-cols-2 gap-10">
            <div>
                <img className='h-screen' src={image} alt="" />
            </div>
            <div className='pt-28 mx-auto md:mx-0 md:w-1/2'>
                <h2 className='text-4xl font-bold mb-10 text-center'>Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)} className='space-y-7'>
                    <div className="form-control">
                        <input type="email" className="input input-bordered w-full max-w-sm" name="email" placeholder="email" {...register("email", { required: true })} />
                    </div>
                    <div className="form-control">
                        <input type="password" className="input input-bordered w-full max-w-sm" name="password" placeholder="passowrd" {...register("password", { required: true })} />

                    </div>
                    <div className="form-control">
                        <input type="text" className="input input-bordered w-full max-w-sm" name="name" placeholder="name" {...register("name", { required: true })} />

                    </div>
                    <div className="form-control">
                        <input type="text" className="input input-bordered w-full max-w-sm" name="photoURL" placeholder="photoURL" {...register("photoURL", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>

                    <div>
                        <input type="submit" className='btn btn-block max-w-sm' value="Login" />
                    </div>
                </form>
                <p className="text-center mt-3">Already have an Account? <Link to='/login'>Sign In Here</Link></p>
                <SocilaLogin></SocilaLogin>
            </div>
        </div>
    );
};

export default Register;