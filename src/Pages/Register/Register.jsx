import { useForm } from "react-hook-form";
import image from '../../assets/login.png'

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="grid md:grid-cols-2 gap-10">
            <div>
                <img className='h-screen' src={image} alt="" />
            </div>
            <div className='pt-40 mx-auto md:mx-0 md:w-1/2'>
                <h2 className='text-4xl font-bold mb-10 text-center'>Sign In</h2>

                <form onSubmit={handleSubmit(onSubmit)}  className='space-y-7'>
                    <div className="form-control">
                        <input type="email" className="input input-bordered w-full max-w-xs" name="email" placeholder="email" {...register("email", { required: true })} />
                    </div>
                    <div className="form-control">
                        <input type="password" className="input input-bordered w-full max-w-xs" name="password" placeholder="passowrd" {...register("password", { required: true })} />
                       
                    </div>
                    <div className="form-control">
                        <input type="text" className="input input-bordered w-full max-w-xs" name="name" placeholder="name" {...register("name", { required: true })} />
                       
                    </div>
                    <div className="form-control">
                        <input type="text" className="input input-bordered w-full max-w-xs" name="photoURL" placeholder="photoURL" {...register("photoURL", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>

                    <input type="submit" value="Register" className="btn" />
                </form>
            </div>
        </div>
    );
};

export default Register;