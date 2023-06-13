import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaHome, FaUserTie, FaClipboardCheck, FaAlignLeft, FaBookOpen } from "react-icons/fa";
import useAdmin from "../../../../hooks/useAdmin";
import useInstructor from "../../../../hooks/useInstructor";

const Dashboard = () => {

	// TODO
	// const isInstructor = false;
	const [isInstructor] = useInstructor();
	const [isAdmin] = useAdmin();


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
							<div>
								<li className="text-blue-800"><NavLink to="/dashboard"><FaHome></FaHome>Admin Home</NavLink></li>
								<li><NavLink to="/dashboard/allClass"><FaBook></FaBook> Manage Classes</NavLink></li>
								<li><NavLink to="/dashboard/allUser"><FaClipboardCheck></FaClipboardCheck>Manage Users</NavLink></li>
							</div>
						
						</> : <>
								{isInstructor ?
									<>
										<li><NavLink to="/dashboard"><FaHome></FaHome>Instructors Home</NavLink></li>
										<li><NavLink to="/dashboard/addClass"><FaBook></FaBook> Add a Class</NavLink></li>
										<li><NavLink to="/dashboard/instructorClass"><FaClipboardCheck></FaClipboardCheck>My Classes</NavLink></li>
									</> : <>
										<div>
											<li><NavLink to="/dashboard"><FaHome></FaHome>Student Home</NavLink></li>
											<li><NavLink to="/dashboard/myClass"><FaBook></FaBook> My Classes</NavLink></li>
											<li><NavLink to="/dashboard/history"><FaBookOpen></FaBookOpen> Payment History</NavLink></li>
											<li><NavLink to="/dashboard/enrollClass"><FaClipboardCheck></FaClipboardCheck>My Enrolled Classes</NavLink></li>
										</div>
									
									</>
								}
						
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