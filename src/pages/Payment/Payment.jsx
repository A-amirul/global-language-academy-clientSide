import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

const Payment = () => {

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const price = searchParams.get("price");
	console.log(price);

	const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
	return (
		<div className="w-9/12 p-10 mx-4">
			<h2 className="text-4xl text-center font-bold">Please Payment!! </h2>
			<Elements stripe={stripePromise}>
				<CheckoutForm  price={price}></CheckoutForm>
			</Elements>

		</div>

	);
};

export default Payment;