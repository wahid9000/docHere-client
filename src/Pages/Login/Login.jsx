import { FaGoogle } from 'react-icons/fa';
import image from '../../assets/login.png'
import { Link } from "react-router-dom";
const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
    }
    return (
        <div className='grid md:grid-cols-2 gap-10'>
            <div>
                <img className='h-screen' src={image} alt="" />
            </div>
            <div className='pt-40 mx-auto md:mx-0 md:w-1/2'>
                <h2 className='text-4xl font-bold mb-10 text-center'>Sign In</h2>
                <form onSubmit={handleLogin} className='space-y-7'>
                    <div className='form-control'>
                        <input type="email" name='email' placeholder="email" className="input input-bordered w-full max-w-sm" />
                    </div>
                    <div className='form-control'>
                        <input type="password" name="password" placeholder="password" className="input input-bordered w-full max-w-sm" />
                    </div>
                    <div>
                        <input type="submit" className='btn btn-block max-w-sm' value="Login" />
                    </div>
                </form>
                <p className='mt-5 text-center'>Do not Have an Account? <Link to='/register'>Register Now!</Link></p>
                <div className="divider text-left">OR</div>
                <div className='text-center'>
                     <button className='btn btn-outline'><FaGoogle className='mr-2'></FaGoogle> Continue With Google</button>
                </div>
               
            </div>
        </div>
    );
};

export default Login;