import useClasses from "../../../../../hooks/useClasses";
import useInstructors from "../../../../../hooks/useInstructors";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaBook, FaUser, FaUserTie } from "react-icons/fa";
import useTitle from "../../../../../../useTitle";

const AdminHome = () => {
	const [classes] = useClasses();
	const [instructors] = useInstructors();

	const [axiosSecure] = useAxiosSecure();
	const { data: users = [] } = useQuery(['users'], async () => {
		const res = await axiosSecure.get('/users')
		return res.data;
	})

	useTitle('Admin Home')

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-4 m-10 text-white font-extrabold text-3xl">

				<div className="bg-orange-600 p-10  text-center rounded-lg shadow-lg">
					<FaBook className="mx-auto"></FaBook>
					<h2 className="w-full">Classes</h2>
					<p>{classes?.length}</p>

				</div>


				<div className="bg-red-600 p-10  text-center rounded-lg shadow-lg">
					<FaUserTie className="mx-auto"></FaUserTie>
					<h2 className="w-full"> Instructors</h2>
					<p>{instructors?.length}</p>

				</div>



				<div className="bg-yellow-900 p-10  text-center rounded-lg shadow-lg">
					<FaUser className="mx-auto"></FaUser>
					<h2 className="w-full">Students</h2>
					<p>{users?.length}</p>
				</div>

			</div>
			<div className="flex items-center justify-center">

				<div className=" text-center p-10 m-10">

					<h2 className="text-3xl font-extrabold">Welcome to Visit Global Language Academy!!</h2>
					<p className="text-4xl text-green-500 py-10 font-extrabold">You are Logged in as a Admin</p>



				</div>




			</div>
			
		</>
	);
};

export default AdminHome;