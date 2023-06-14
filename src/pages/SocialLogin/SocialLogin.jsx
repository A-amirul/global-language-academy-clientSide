import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
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
				console.log(loggedUser);

				const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser?.reloadUserInfo?.photoUrl }

				fetch('https://global-language-academy-server-sable.vercel.app/users', {
					method: 'POST',
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify(saveUser)
				})
					.then(res => res.json())
					.then(() => {
						navigate(from, { replace: true })
					})
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