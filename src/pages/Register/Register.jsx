import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form.get('name'));

        const email = form.get('email');
        const name = form.get('name');
        
    }

    return (
        <div>
            <Navbar></Navbar>

            {/* Register form */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold">Register your account</h1>
                        <hr className="border-1 mt-12" />
                    </div>

                    <div className="card shrink-0 w-full max-w-sm">

                        {/*       Form            */}
                        <form onSubmit={handleRegister} className="card-body">

                            {/* Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered rounded-md  bg-gray-100" required />
                            </div>

                            {/* Photo url */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Photo URL</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="photo URL" className="input input-bordered rounded-md  bg-gray-100"  />
                            </div>

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Email Address</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered rounded-md  bg-gray-100" required />
                            </div>

                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered rounded-md bg-gray-100" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-gray-800">Register</button>
                            </div>
                            <p className="font-bold text-sm">
                                Already Have An Account ?<Link to={'/login'}><span className="text-orange-400"> Login</span></Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;