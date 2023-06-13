import { useEffect, useState } from "react";

const PaymentHistory = () => {
	const [payments, setPayments] = useState();
	useEffect(() => {
		fetch('http://localhost:5000/payments')
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setPayments(data);

			})
	}, [])
	return (
		<div className="bg-base-200">
			<h2 className="text-5xl text-center font-bold py-10">My Payment History: {payments?.length}</h2>
			<div>
				<div className="overflow-x-auto px-10 bg-green-200">
					<table className="table">
						{/* head */}
						<thead className="font-bold text-xl">
							<tr className="bg-green-300">
								<th>#</th>
								<th>Class Name</th>
								<th>Email</th>
								<th>Date</th>
								<th>Corse Fee</th>
							</tr>
						</thead>
						<tbody>
							{
								payments?.map((payment, index) => <tr key={payment._id}>

									<td>
										<p className="font-bold"> {index + 1}</p>

									</td>

									<td>
										<p className="font-semibold text-lg">{payment.className} Language</p>

									</td>
									<td>
										<p className="font-semibold text-lg">{payment.email}</p>
									</td>
									<td>
										<p className="text-lg font-medium">{payment.date}</p>
									</td>
									<td><p className="font-medium">${payment.price}</p></td>

								</tr>)
							}

						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default PaymentHistory;