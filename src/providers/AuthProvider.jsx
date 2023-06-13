import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	}
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);

			// get and set token
			if (currentUser) {
				axios.post('https://global-language-academy-server-a-amirul.vercel.app/jwt', { email: currentUser.email })
					.then(data => {
						localStorage.setItem('access-token', data.data.token);
						setLoading(false);
					})
			}
			else {
				localStorage.removeItem('access-token');
			}

		});
		return () => {
			unsubscribe();
		}
	}, [])

	const logOut = () => {
		setLoading(true);
		return signOut(auth);

	}

	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name, photoURL: photo
		});
	}

	const authInfo = {
		user,
		loading,
		createUser,
		updateUserProfile,
		signIn,
		logOut
	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;