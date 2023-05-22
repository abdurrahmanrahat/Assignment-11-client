import { Link } from 'react-router-dom';
import image from '../../assets/login-page.jpg';
import googleImg from '../../assets/google-btn.png';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // signIn user
        // signIn(email, password)
        //     .then(result => {
        //         const loggedUser = result.user;
        //         console.log(loggedUser);
        //     })
        //     .catch(error => {
        //         console.log(error.message);
        //     })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="md:w-1/2 md:mr-24">
                    <img src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-semibold text-center">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-sm text-center my-2'>Do Not Have An Account? Please <Link className='text-orange-600 font-semibold' to="/register">Sign Up</Link></p>
                        <div>
                            <img className='rounded-lg w-4/5 mx-auto' src={googleImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;