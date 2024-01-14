import { useContext, } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useClasses from "../../hooks/useClasses";
import useTitle from "../../../useTitle";

const InstructorClass = () => {
	const { user } = useContext(AuthContext);
	const [classes] = useClasses();

	const instructorClasses = classes?.filter(instructorClass => user?.email === instructorClass?.email);
	console.log(instructorClasses);

	useTitle('Enrolled Students');

	return (
		<div className="bg-white">
			<h2 className="text-5xl text-center font-bold py-10">Total Enrolled Students: {instructorClasses?.length}</h2>
			<div>
				<div className="overflow-x-auto bg-white">
					<table className="table">
						{/* head */}
						<thead className="font-bold text-xl">
							<tr className="bg-green-300">
								<th>#</th>
								<th>Image</th>
								<th>Instructor Name</th>
								<th>Course Name</th>
								<th>Available Seats</th>
								<th>Course Fee</th>
							</tr>
						</thead>
						<tbody>
							{
								instructorClasses?.map((singleClass, index) => <tr key={singleClass._id}>

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
									<td>
										<p className="text-lg font-medium">{singleClass.availableSeats}</p>
									</td>
									<td><p className="font-medium">${singleClass.price}</p></td>

								</tr>)
							}

						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default InstructorClass;