import Swal from "sweetalert2";
import useMyClass from "../../hooks/useMyClass";
import { Link } from "react-router-dom";

const AllClass = () => {
	const [myClass, refetch] = useMyClass();

	const handleApproved = singleClass => {
		Swal.fire({
			title: 'Are you sure?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Approved it!'
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
								'Approved!',
								'This class has been Approved.',
								'success'
							)
						}
					})
			}
		})
	}
	const handleDenied = singleClass => {
		Swal.fire({
			title: 'Are you sure?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Denied it!'
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
								'Denied!',
								'This class has been removed.',
								'success'
							)
						}
					})
			}
		})
	}

	return (
		<div className="bg-base-200">
			<h2 className="text-5xl text-center font-bold py-10">All Class: {myClass?.length}</h2>
			<div>
				<div className="overflow-x-auto px-10 bg-green-200">
					<table className="table">
						{/* head */}
						<thead className="font-bold text-xl">
							<tr className="bg-green-300">
								<th>#</th>
								<th>Image</th>
								<th>Instructor Name</th>
								<th>Course Name</th>
								<th>Course Fee</th>
								<th>Approved</th>
								<th>Denied</th>
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

									<td><p className="font-medium">${singleClass.price}</p></td>
									<td>
										<Link>
											<button onClick={()=>handleApproved(singleClass)} className="btn btn-primary" >Approved</button>
										</Link>
									
									</td>
									<td>
										
											<button onClick={() => handleDenied(singleClass)} className="btn btn-info">Denied</button>
										
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

export default AllClass;