import { Fade, Flip, Rotate, Zoom } from "react-awesome-reveal";
import useClasses from "../../../../../hooks/useClasses";
import useInstructors from "../../../../../hooks/useInstructors";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaBook, FaUser, FaUserTie } from "react-icons/fa";

const AdminHome = () => {
	const [classes] = useClasses();
	const [instructors] = useInstructors();

	const [axiosSecure] = useAxiosSecure();
	const { data: users = [] } = useQuery(['users'], async () => {
		const res = await axiosSecure.get('/users')
		return res.data;
	})

	return (
		<>
			<div className="flex items-center">
				<Zoom>
					<div className="border shadow-md bg-green-600 text-white text-center p-10 m-10">
						<h2 className="text-5xl font-extrabold">Welcome to Visit Global Language Academy!!</h2>

						<p className="text-4xl text-green-800 py-10 font-extrabold">You are Logged in as a Admin</p>

					</div>

				</Zoom>

				

			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-4 m-10 text-white font-extrabold text-3xl">
				<Fade>
					<div className="bg-orange-600 p-10  text-center rounded-lg shadow-lg">
						<FaBook className="mx-auto"></FaBook>
						<h2 className="w-full">Classes</h2>
						<p>{classes?.length}</p>

					</div>
				</Fade>
				<Flip>
					<div className="bg-red-600 p-10  text-center rounded-lg shadow-lg">
						<FaUserTie className="mx-auto"></FaUserTie>
					<h2 className="w-full"> Instructors</h2>
					<p>{instructors?.length}</p>

					</div>
				</Flip>

				<Rotate>
					<div className="bg-yellow-900 p-10  text-center rounded-lg shadow-lg">
							<FaUser className="mx-auto"></FaUser>
						<h2 className="w-full">Students</h2>
						<p>{users?.length}</p>
					</div>
				</Rotate>
			</div>
		</>
	);
};

export default AdminHome;