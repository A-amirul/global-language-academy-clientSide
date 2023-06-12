import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaHome, FaUserTie, FaClipboardCheck, FaAlignLeft } from "react-icons/fa";

const Dashboard = () => {

	// TODO
	const isAdmin = true;
	return (
		<div className="drawer lg:drawer-open">
			
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			
			<div className="drawer-content flex flex-col items-start justify-start">
				<label htmlFor="my-drawer-2" className=" drawer-button lg:hidden  m-10 text-black"><FaAlignLeft className="w-10 h-10"></FaAlignLeft></label>

				{/* Page content here */}
				<Outlet></Outlet>
				

			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<ul className="menu p-8 w-80 h-full bg-green-500 text-black font-bold text-lg">
					{/* Sidebar content here */}
					{
						isAdmin ? <>
							<li><NavLink to="/dashboard/home"><FaHome></FaHome>Admin Home</NavLink></li>
							<li><NavLink to="/dashboard/manage"><FaBook></FaBook> Manage Classes</NavLink></li>
							<li><NavLink to="/dashboard/allUser"><FaClipboardCheck></FaClipboardCheck>Manage Users</NavLink></li>
						
						
						
						</> : <>
								<div>
									<li><NavLink to="/dashboard/home"><FaHome></FaHome>Student Home</NavLink></li>
									<li><NavLink to="/dashboard/myClass"><FaBook></FaBook> My Classes</NavLink></li>
									<li><NavLink to="enrollClass"><FaClipboardCheck></FaClipboardCheck>My Enrolled Classes</NavLink></li>
								</div>
								{/* || <div>
									<li><NavLink to="/dashboard/home"><FaHome></FaHome>Instructors Home</NavLink></li>
									<li><NavLink to="/dashboard"><FaBook></FaBook> Add a Class</NavLink></li>
									<li><NavLink to="enrollClass"><FaClipboardCheck></FaClipboardCheck>My Classes</NavLink></li>
							</div> */}
						
						</>
					}


					


					<div className="divider"></div>
					<li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
					<li><NavLink to="/classes"> <FaBook></FaBook>Classes</NavLink></li>
					<li><NavLink to="/instructors"><FaUserTie></FaUserTie>Instructors</NavLink></li>
				</ul>

			</div>
		</div>
	);
};

export default Dashboard ;