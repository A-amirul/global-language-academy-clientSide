import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const provider = new GoogleAuthProvider();
const auth = getAuth();


const SocialLogin = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || '/'


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
				console.log(error.message);
			});
	};
	return (
		<div className="mx-auto">
			<hr className="my-4" />
			<button onClick={handleGoogleSignIn} className="btn btn-outline rounded-full text-blue-600"><FaGoogle className="me-2 text-green-600"></FaGoogle>Continue With Google</button>
		
		</div>
	);
};

export default SocialLogin;