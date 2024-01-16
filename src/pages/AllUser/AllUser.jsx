import { useQuery } from "@tanstack/react-query";
import { FaUserShield, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useTitle from "../../../useTitle";

const AllUser = () => {
	const [axiosSecure] = useAxiosSecure();
	const { data: users = [], refetch } = useQuery(['users'], async () => {
		const res = await axiosSecure.get('/users')
		return res.data;
	})

	useTitle('Manage User');

	const handleMakeAdmin = user => {
		fetch(`https://global-language-academy-server-sable.vercel.app/users/admin/${user._id}`, {
			method: 'PATCH'
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.modifiedCount) {
					refetch();
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: `${user.name}is an Admin Now`,
						showConfirmButton: false,
						timer: 1500
					});
				}
			})

	}
	const handleMakeInstructor = user => {
		fetch(`https://global-language-academy-server-sable.vercel.app/users/instructor/${user._id}`, {
			method: 'PATCH'
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.modifiedCount) {
					refetch();
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: `${user.name}is an Instructor Now`,
						showConfirmButton: false,
						timer: 1500
					});
				}
			})
	}
	return (
		<div className="bg-white">
			<h2 className="text-4xl font-bold md:text-center mx-20 mb-5 md:py-8 ">All Users</h2>


			

			<div className="overflow-x-auto">
				<table className="table table-xs table-pin-rows table-pin-cols">
					{/* head */}
					<thead className="font-bold text-xl">
						<tr className="bg-slate-300">
							<th>SL.</th>
							<th>User Name</th>
							<th>Email Address</th>
							<th>Make Admin</th>
							<th>Make Instructor</th>
						</tr>
					</thead>
					<tbody>
						{
							users?.map((user, index) => <tr key={user._id}>

								<td>
									{index + 1}
								</td>
								<td>
									<p className="font-semibold text-lg">{user.name}</p>
								</td>
								<td>
									<p className="text-lg font-medium">{user.email}</p>
								</td>
								<td>
									<span className="font-medium">
										{user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn text-white bg-green-800 normal-case"><FaUserTie></FaUserTie></button>}
									</span>

								</td>
								<td>
									<span className="font-medium">
										{
											user.role === 'instructor' ? 'Instructor' :
												<button onClick={() => handleMakeInstructor(user)} className="btn bg-red-400 text-white normal-case"><FaUserShield></FaUserShield></button>
										}
									</span>
								</td>

							</tr>)
						}

					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllUser;