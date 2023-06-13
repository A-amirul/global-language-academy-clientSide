import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import { FaAmazonPay } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import "./CheckoutForm.css"
import Swal from "sweetalert2";


const CheckoutForm = ({singleClass, price }) => {
	const stripe = useStripe();
	const elements = useElements();
	const { user } = useAuth();
	const [axiosSecure] = useAxiosSecure()
	const [cardError, setCardError] = useState('');
	const [clientSecret, setClientSecret] = useState('');
	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState('');

	useEffect(() => {
		if (price > 0) {
			axiosSecure.post('/create-payment-intent', { price })
				.then(res => {
					console.log('inside useEffect');
					console.log(res.data.clientSecret)
					setClientSecret(res.data.clientSecret);
				})
		}
	}, [price, axiosSecure])


	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return
		}

		const card = elements.getElement(CardElement);
		if (card === null) {
			return
		}

		const { error } = await stripe.createPaymentMethod({
			type: 'card',
			card
		})

		if (error) {
			console.log('error', error)
			setCardError(error.message);
		}
		else {
			setCardError('');
		}

		setProcessing(true)

		const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
			clientSecret,
			{
				payment_method: {
					card: card,
					billing_details: {
						email: user?.email || 'unknown',
						name: user?.displayName || 'anonymous'
					},
				},
			},
		);

		if (confirmError) {
			console.log(confirmError);
		}

		console.log('payment intent', paymentIntent)
		setProcessing(false)
		if (paymentIntent.status === 'succeeded') {
			setTransactionId(paymentIntent.id);
			const payment = {
				email: user?.email,
				transactionId: paymentIntent.id,
				price,
				date: new Date(),
				classId:singleClass._id,
				status: 'service pending',
				className: singleClass?.name
			}
			axiosSecure.post('/payments', payment)
				.then(res => {
					console.log(res.data);
					if (res?.data?.insertedId) {
						// display confirm
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Your payment successful',
							showConfirmButton: false,
							timer: 1500
						})
					}
				})
		}


	}

	return (
		<>
			<form className="w-full m-8" onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#424770',
								'::placeholder': {
									color: '#aab7c4',
								},
							},
							invalid: {
								color: '#9e2146',
							},
						},
					}}
				/>
				<button className="btn bg-red-600" type="submit" disabled={!stripe ||!clientSecret || processing}>
					<FaAmazonPay className="text-white w-10 h-4 "></FaAmazonPay>
				</button>
			</form>
			{cardError && <p className="text-red-600 ml-8">{cardError}</p>}
			{transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
		</>
	);
};

export default CheckoutForm;