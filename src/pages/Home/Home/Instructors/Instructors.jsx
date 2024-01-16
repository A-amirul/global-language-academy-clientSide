import useTitle from "../../../../../useTitle";
import useInstructors from "../../../../hooks/useInstructors";

const Instructors = () => {
	const [instructors] = useInstructors();

	useTitle("Instructors");
	return (
		<>
			<div className="overflow-x-auto pt-20 px-10 bg-white">
				<table className="table">
					{/* head */}
					<thead className="font-bold text-xl text-primary">
						<tr>
							<th>#</th>
							<th>Image</th>
							<th>Instructor Name</th>
							<th>Email Address</th>
							<th>Classes Taken</th>
						</tr>
					</thead >
					<tbody className="text-black">
						{
							instructors?.map((instructor, index) => <tr key={index}>

								<td>
									{index + 1}

								</td>

								<td>
									<div className="flex items-center space-x-3">
										<div className="avatar">
											<div className="mask mask-squire w-24 h-24">
												<img className="rounded-full" src={instructor.image} alt="Avatar Tailwind CSS Component" />
											</div>
										</div>

									</div>
								</td>
								<td>
									<p className="font-semibold text-lg">{instructor.name}</p>
								</td>
								<td>
									<p className="text-lg font-medium">{instructor.email}</p>
								</td>
								<td><p className="font-bold">{instructor.classesTaken}</p></td>

							</tr>)
						}

					</tbody>
				</table>
			</div>
		</>
	);
};

export default Instructors;