import { Link } from "react-router-dom";
import img from '../../assets/login-page.jpg';
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault()
        setSuccess('');
        setError('');
        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        if (password.length < 6) {
            setError("Password should be six characters or numbers.");
            return;
        }

        // create user
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setSuccess("Successfully user Register.");
                form.reset();
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 md:mr-24">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-semibold text-center">SignUp</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-sm text-center my-2'>Already Have An Account? Please <Link className='text-orange-600 font-semibold' to="/login">Login</Link></p>
                    </div>
                    <p className="mx-auto text-purple-700-600 mb-0">{success}</p>
                    <p className="mx-auto text-red-600 mb-6">{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;