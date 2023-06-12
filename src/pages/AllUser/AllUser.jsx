import { useQuery } from "@tanstack/react-query";
import { FaUserShield, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
	const { data: users = [], refetch } = useQuery(['users'], async () => {
		const res = await fetch('http://localhost:5000/users')
		return res.json();
	})

	const handleMakeAdmin = user => {
		fetch(`http://localhost:5000/users/admin/${user._id}`, {
			method:'PATCH'
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
	const handleMakeInstructor = id => {
		
	}
	return (
		<div className="overflow-x-auto pt-20 px-10 bg-green-200">
			<table className="table">
				{/* head */}
				<thead className="font-bold text-xl">
					<tr className="bg-green-300">
						<th>#</th>
						<th>User Name</th>
						<th>Email Address</th>
						<th>Roll</th>
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
								<p className="text-lg font-medium">{user.email} Language</p>
							</td>
							<td>
								<div className="flex gap-4">
									<span>
										{user.role === 'admin' ? 'admin' : <button onClick={()=>handleMakeAdmin(user)} className="btn text-white bg-green-800 normal-case"><FaUserTie></FaUserTie>Admin</button>}
									</span>
									<span>
										{
											user.role === 'instructor' ? 'instructor' :
												<button onClick={()=>handleMakeInstructor(user)} className="btn bg-red-700 text-white normal-case"><FaUserShield></FaUserShield>Instructor</button>
										}
									</span>
								</div>
							</td>

						</tr>)
					}

				</tbody>
			</table>
		</div>
	);
};

export default AllUser;