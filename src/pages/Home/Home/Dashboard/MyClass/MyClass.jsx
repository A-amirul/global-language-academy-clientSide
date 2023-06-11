import { FaAmazonPay } from "react-icons/fa";
import useTitle from "../../../../../../useTitle";
import useMyClass from "../../../../../hooks/useMyClass";

const MyClass = () => {
	const [myClass] = useMyClass();
	console.log(myClass);

	useTitle("My Class");
	return (
		<div className="bg-base-200">
			<h2 className="text-5xl text-center font-bold py-10">My Class: {myClass.length}</h2>
			<div>
				<div className="overflow-x-auto px-10 bg-green-200">
					<table className="table">
						{/* head */}
						<thead className="font-bold text-xl">
							<tr>
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
									<td className="flex mt-4">
										<button className="btn btn-square btn-outline mx-4 w-16">
											
											<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
										</button>
										<button className="btn btn-square btn-outline bg-amber-600 w-16">
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