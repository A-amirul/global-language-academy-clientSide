import useClasses from "../../hooks/useClasses";

const AllClass = () => {
	const [classes] = useClasses();

	return (
		<div className="bg-base-200">
			<h2 className="text-5xl text-center font-bold py-10">All Class: {classes?.length}</h2>
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
								<th>Pending</th>
								<th>Approved</th>
								<th>Denied</th>
							</tr>
						</thead>
						<tbody>
							{
								classes?.map((singleClass, index) => <tr key={singleClass._id}>

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
									<td><button className="btn btn-primary">Pending</button></td>
									<td><button className="btn btn-secondary">Approved</button></td>
									<td><button className="btn btn-info">Denied</button></td>

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