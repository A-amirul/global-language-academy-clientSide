import { FaAmazonPay, FaTrashAlt } from "react-icons/fa";
import useTitle from "../../../../../../useTitle";
import useMyClass from "../../../../../hooks/useMyClass";
import Swal from "sweetalert2";

const MyClass = () => {
	const [myClass,refetch] = useMyClass();
	console.log(myClass);
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
				fetch(`http://localhost:5000/myClass/${singleClass?._id}`, {
					method:'DELETE'
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
		<div className="bg-base-200">
			<h2 className="text-5xl text-center font-bold py-10">My Class: {myClass.length}</h2>
			<div>
				<div className="overflow-x-auto px-10 bg-green-200">
					<table className="table">
						{/* head */}
						<thead className="font-bold text-xl">
							<tr className="bg-green-300">
								<th>#</th>
								<th>Image</th>
								<th>Instructor Name</th>
								<th>Course</th>
								<th>Course Fee</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{
								myClass?.map((singleClass, index) => <tr key={singleClass._id}>

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
									<td><p className="font-medium">{singleClass.price}</p></td>
									<td className="flex mt-4">
										<button onClick={()=>handleDelete(singleClass)} className="btn btn-square btn-outline  w-16">
											<FaTrashAlt className="h-5 w-6"></FaTrashAlt>
										</button>
										<button className="btn btn-square btn-outline mx-4 bg-amber-600 w-16">
											<FaAmazonPay className="h-6 w-6"></FaAmazonPay>
										</button>
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