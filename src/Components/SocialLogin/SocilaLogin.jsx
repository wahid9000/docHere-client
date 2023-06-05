import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Pages/Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocilaLogin = () => {
    const { loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
       
                            navigate(from, { replace: true });
  
                    })







            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider text-left">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleLogin} className='btn btn-outline'><FaGoogle className='mr-2'></FaGoogle> Continue With Google</button>
            </div>
        </div>
    );
};

export default SocilaLogin;