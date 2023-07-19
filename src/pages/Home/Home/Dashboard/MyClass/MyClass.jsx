import { FaAmazonPay, FaTrashAlt } from "react-icons/fa";
import useTitle from "../../../../../../useTitle";
import useMyClass from "../../../../../hooks/useMyClass";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../../providers/AuthProvider";

const MyClass = () => {
	const [myClass, refetch] = useMyClass();
	const { user } = useContext(AuthContext);
	const addedClass = myClass?.filter(data => data.email == user.email)
	const handleDelete = singleClass => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://global-language-academy-server-sable.vercel.app/myClass/${singleClass?._id}`, {
					method: 'DELETE'
				})
					.then(res => res.json())
					.then(data => {
						if (data.deletedCount > 0) {
							refetch();
							Swal.fire(
								'Deleted!',
								'Your file has been deleted.',
								'success'
							)
						}
					})
			}
		})
	}

	useTitle("My Class");
	return (
		<div className="bg-base-200 md:min-w-full">
			<h2 className="text-5xl text-center font-bold py-10">My Class: {addedClass?.length}</h2>
			<div>
				<div className="overflow-x-auto bg-green-200">
					<table className="table">
						{/* head */}
						<thead className="font-bold text-xl">
							<tr className="bg-green-300">
								<th>#</th>
								<th>Image</th>
								<th>Instructor Name</th>
								<th>Course</th>
								<th>Course Fee</th>
								<th>Delete</th>
								<th>Pay</th>
							</tr>
						</thead>
						<tbody>
							{
								addedClass?.map((singleClass, index) => <tr key={singleClass._id}>

									<td>
										<p className="font-bold"> {index + 1}</p>

									</td>

									<td>
										<div className="flex items-center space-x-3">
											<div className="avatar">
												<div className="mask mask-squire w-24 h-24">
													<img src={singleClass.image} alt="Avatar" />
												</div>
											</div>

										</div>
									</td>
									<td>
										<p className="font-semibold text-lg">{singleClass.instructor}</p>
									</td>
									<td>
										<p className="text-lg font-medium">{singleClass.name} Language</p>
									</td>
									<td><p className="font-medium">${singleClass.price}</p></td>
									<td>
										<button onClick={() => handleDelete(singleClass)} className="btn btn-square btn-outline  w-16">
											<FaTrashAlt className="h-5 w-6"></FaTrashAlt>
										</button>

									</td>
									<td>
										<Link to={`/dashboard/payment?id=${singleClass._id}`}><button className="btn btn-square btn-outline bg-amber-600 w-16">
											<FaAmazonPay className="h-6 w-6 text-white"></FaAmazonPay>
										</button></Link>
									</td>
								</tr>)
							}

						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default MyClass;