import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../../useTitle";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
	const [error, setError] = useState('');
	const { signIn } = useContext(AuthContext);
	const { register, handleSubmit, formState: { errors } } = useForm();
	// handle password eye
	const [passwordEye, setPasswordEye] = useState(false);
	

	const handlePasswordClick = () => {
		setPasswordEye(!passwordEye);
	};

	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || '/'


	const onSubmit = data => {
		console.log(data);

		signIn(data.email, data.password)
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Your work has been saved',
					showConfirmButton: false,
					timer: 1500
				})
				navigate(from, { replace: true })
			})
			.catch(error => setError(error));
	};


	const handleGoogleSignIn = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const loggedUser = result.user;
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Logged in Successfully',
					showConfirmButton: false,
					timer: 1500
				})
				console.log(loggedUser);
				navigate(from, { replace: true })
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	useTitle("Login")

	

	return (
		<div className="hero min-h-screen bg-base-200 mx-auto py-16 md:px-16">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left md:w-1/2 mx-auto">
					<h1 className="text-3xl font-semibold">Create Your Account</h1>
					<p className="py-6">By registering at Global Language Academy, you will be able to Enroll and access the Course materials and Status of your course. Create your new account easily.</p>
					<div className="form-control mt-6">
						<Link to="/register" className="btn bg-sky-600 rounded-full text-base-100">Register Please</Link>
					</div>
				</div>

				<div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
					<div className="card-body">
						<h1 className="text-3xl font-semibold">Login your Account</h1>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input type="email" placeholder="email" name="email"  {...register("email", { required: true })} className="input input-bordered" />
								{errors.email && <span className="text-red-600">Email is required</span>}
							</div>
							<div>
								<div className="form-control relative">
									<label className="label">
										<span className="label-text">Password</span>
									</label>
									<input type={passwordEye === false ? "password" : "text"} name="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
									{/* eye section */}
									<div className="text-2xl absolute top-12 right-5">
										{passwordEye === false ? (
											<FaEyeSlash onClick={handlePasswordClick} />
										) : (
											<FaEye onClick={handlePasswordClick} />
										)}
									</div>
									
								</div>
								{errors.email && <span className="text-red-600">Password is required</span>}
								<label className="label">
									<Link className="label-text-alt link link-hover">Forgot password?</Link>
								</label>
							</div>
							<div className="form-control mt-6">
								<input className="btn bg-sky-600 rounded-full text-base-100" type="submit" value="Login" />
							</div>
							<p>{error}</p>
						</form>
						<hr className="my-4" />
						<button onClick={handleGoogleSignIn} className="btn btn-outline rounded-full text-blue-600"><FaGoogle className="me-2 text-green-600"></FaGoogle>Continue With Google</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;