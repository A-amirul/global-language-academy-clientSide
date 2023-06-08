import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import userImg from "/user.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => { })
			.catch(error => console.log(error))
	}
	const NavItems = <>
		<li> <Link to="/">Home</Link></li>
		<li><Link to="/about">About</Link></li>
		
		<li><Link to="/">Blog</Link></li>

	</>
	return (
		<div className="navbar fixed max-w-screen-xl mx-auto z-10  bg-opacity-30  bg-black text-white px-8">
			<div className="navbar-start">
				<div className="dropdown px-2">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 hover:bg-base-200 text-black rounded-box w-52 font-medium">
						{NavItems}
					</ul>
				</div>
				<Link to="/" className="font-bold text-xl">
					<img className="mx-auto" style={{ width: "150px", height: "40px" }} src={logo} alt="" />
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-2 font-medium">
					{NavItems}
				</ul>
			</div>
			<div className="navbar-end">

				<div className='text-blue-600 rounded-xl text-lg'>
					{
						user ?
							<div className="flex gap-4">
								<div className="dropdown dropdown-end">
									<label tabIndex={0} className=""><img 
										className='w-10 h-10 rounded-full border border-white'
										title={user?.reloadUserInfo?.displayName ? user?.reloadUserInfo?.displayName : 'user name not available'}
										src={user?.photoURL === null || '' ? userImg : user?.reloadUserInfo?.photoUrl} alt="" /></label>
									<ul tabIndex={0} className="dropdown-content menu px-2 shadow bg-base-100 rounded-box w-52">
										<li><a><p>{user?.reloadUserInfo?.displayName?user?.reloadUserInfo?.displayName : 'user name not available'}</p></a></li>
										<li><p onClick={handleLogOut}>Log Out</p></li>
									</ul>
								</div>
								
								</div>
							:
							<Link to='/login'
								className="text-white bg-sky-600 border border-3 px-2 py-1 rounded-md border-white"
							>
								Login
							</Link>
					}

				</div>

			</div>
		</div>
	);
};

export default Header;