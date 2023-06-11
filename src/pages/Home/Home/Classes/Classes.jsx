import { useContext } from "react";
import useTitle from "../../../../../useTitle";
import useClasses from "../../../../hooks/useClasses";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useMyClass from "../../../../hooks/useMyClass";

const Classes = () => {
	const [classes] = useClasses();
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const [, refetch] = useMyClass();

	const handleSelect = singleClass => {
		console.log(singleClass);
		const { availableSeats, price, image, name, instructor, _id } = singleClass;
		if (user && user.email) {
			const selectClass = { classId: _id, availableSeats, price, image, name, instructor,email:user?.email }
			fetch('http://localhost:5000/myClass', {
				method: 'POST',
				headers: {
					'content-type':'application/json'
				},
				body: JSON.stringify(selectClass)
			})
				.then(res => res.json())
				.then(data => {
					if (data?.insertedId) {
						refetch();
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'successfully added to my class',
							showConfirmButton: false,
							timer: 1500
						})
				}
			})
		}
		else {
			Swal.fire({
				title: 'Please Login to select a Class',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Login Now!'
			}).then((result) => {
				if (result.isConfirmed) {
				navigate('/login',{state:{from:location}});
				}
			})
		}
	}

	useTitle("Classes");
	return (
		<>
			<div className="overflow-x-auto pt-20 px-10 bg-green-200">
				<table className="table">
					{/* head */}
					<thead className="font-bold text-xl text-green-900">
						<tr>
							<th>#</th>
							<th>Image</th>
							<th>Instructor Name</th>
							<th>Course</th>
							<th>Course fee </th>
							<th>Available Seats </th>
							<th>Select Classes</th>
						</tr>
					</thead>
					<tbody>
						{
							classes?.map((singleClass, index) => <tr key={singleClass._id}>

								<td>
									{index + 1}

								</td>

								<td>
									<div className="flex items-center space-x-3">
										<div className="avatar">
											<div className="mask mask-squire w-24 h-24">
												<img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
											</div>
										</div>

									</div>
								</td>
								<td>
									<p className="font-bold text-lg">{singleClass.instructor}</p>
								</td>
								<td>
									<p className="text-lg font-medium">{singleClass.name} Language</p>
								</td>
								<td>{singleClass.price}</td>
								<td>{singleClass.availableSeats}</td>
								<td className="w-20">
									<label>
										<input onClick={()=>handleSelect(singleClass)} type="checkbox" className="checkbox w-10 h-10 border-4 border-blue-800" />
									</label>
								</td>
							</tr>)
						}

					</tbody>
				</table>
			</div>
		</>
	);
};

export default Classes;