import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../../useTitle";

const PaymentHistory = () => {
	const [payments, setPayments] = useState();
	const { user } = useContext(AuthContext);
	useEffect(() => {
		fetch('https://global-language-academy-server-sable.vercel.app/payments')
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setPayments(data);

			})
	}, [])

	const myPayments = payments?.filter(data => data.email === user.email);

	useTitle('Payment History');
	return (
		<div className="bg-white md:min-w-full">
			<h2 className="text-5xl text-center font-bold py-10">My Payment History: {myPayments?.length}</h2>
			<div>
				<div className="overflow-x-auto bg-white">
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
								myPayments?.map((payment, index) => <tr key={payment._id}>

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