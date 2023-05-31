import image from '../../assets/login.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocilaLogin from '../../Components/SocialLogin/SocilaLogin';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {

    const {loginUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true});
        })
        .catch(error => console.log(error))
        

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
                <SocilaLogin></SocilaLogin>
               
            </div>
        </div>
    );
};

export default Login;