import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useTitle from "../../../../useTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Register = () => {
	const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ mode: 'onTouched' });
	const { createUser, updateUserProfile } = useContext(AuthContext);
	const navigate = useNavigate();
	// handle password eye
	const [passwordEye, setPasswordEye] = useState(false);

	// handle confirm password eye
	const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

	const handlePasswordClick = () => {
		setPasswordEye(!passwordEye);
	};

	const handleConfirmPasswordClick = () => {
		setConfirmPasswordEye(!confirmPasswordEye);
	};

	const onSubmit = data => {

		createUser(data.email, data.password)
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				updateUserProfile(data.name, data.photo)
					.then(() => {
						const saveUser = { name: data.name, email: data.email, photo: data.photo }
						fetch('https://global-language-academy-server-a-amirul.vercel.app/users', {
							method: 'POST',
							headers: {
								'content-type': 'application/json'
							},
							body: JSON.stringify(saveUser)
						})
							.then(res => res.json())
							.then(data => {
								if (data.insertedId) {
									reset();
									Swal.fire({
										position: 'top-end',
										icon: 'success',
										title: 'User Registration Successful',
										showConfirmButton: false,
										timer: 1500
									});
									navigate('/');
								}
							})

					})
					.catch(error => console.log(error.message));

			})
	};

	const password = watch('password');


	useTitle("Register");

	return (
		<div className="hero min-h-screen bg-base-200">
			<div>

				<div className="card w-full shadow-2xl bg-base-100">
					<div className="card-body md:w-96">
						<h1 className="text-3xl font-semibold text-center">Registration Now</h1>

						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="form-control ">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input type="text" placeholder="name" name="name"  {...register("name", { required: true })} className="input input-bordered" />
								{errors.name && <span className="text-red-600">Name is required</span>}
							</div>
							<div className="form-control ">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input type="email" placeholder="email" name="email"  {...register("email", { required: true })} className="input input-bordered" />
								{errors.email && <span className="text-red-600">Email is required</span>}
							</div>

							<div className="form-control">
								<label className="label">
									<span className="label-text">Photo URL</span>
								</label>
								<input type="text" name="photo"  {...register("photo", { required: true })} placeholder="URL" className="input input-bordered" />
								{errors.photo && <span className="text-red-600">Photo URL is required</span>}

							</div>
							<div>
								<div className="form-control relative">
									<label className="label">
										<span className="label-text">Password</span>
									</label>
									<input type={passwordEye === false ? "password" : "text"} id="password" name="password"  {...register('password', {
										required: true,
										minLength: 6,
										maxLength: 20,
										pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
									})} placeholder="password" className="input input-bordered" />

									{/* eye section */}
									<div className="text-2xl absolute bottom-2 right-5">
										{passwordEye === false ? (
											<FaEyeSlash onClick={handlePasswordClick} />
										) : (
											<FaEye onClick={handlePasswordClick} />
										)}
									</div>

								</div>
								{errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
								{errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
								{errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
								{errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

							</div>

							<div>
								<div className="form-control relative">
									<label className="label">
										<span className="label-text">Confirm Password</span>
									</label>
									<input type={confirmPasswordEye === false ? "password" : "text"} id="confirmPassword" name="confirmPassword"  {...register("confirmPassword", { validate: (value) => value === password || 'Password does not match', required: true })} placeholder="confirm password" className="input input-bordered" />

									{/* eye section */}
									<div className="text-2xl absolute bottom-2 right-5">
										{passwordEye === false ? (
											<FaEyeSlash onClick={handleConfirmPasswordClick} />
										) : (
											<FaEye onClick={handleConfirmPasswordClick} />
										)}
									</div>

								</div>
								{errors.confirmPassword && <span className="text-red-600">{errors.confirmPassword.message}</span>}
								{errors.confirmPassword?.type === 'required' && <span className="text-red-600">Confirm password required</span>}
							</div>
							<div className="form-control mt-6">
								<input className="btn bg-sky-600 text-base-100" type="submit" value="Register" />
							</div>
						</form>
						<label className="label">
							<small>Already Have an Account?<Link to="/login" className="text-blue-600 px-3 hover:text-blue-900 font-bold">Login</Link> </small>
						</label>
						<SocialLogin></SocialLogin>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;