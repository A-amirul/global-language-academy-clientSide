import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import useMyClass from "../../hooks/useMyClass";
import useTitle from "../../../useTitle";

const Payment = () => {
	const [myClass] = useMyClass();
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const id = searchParams.get("id");
	const singleClass = myClass?.find(data => data._id === id);


	const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

	useTitle("Payment");
	return (
		<div className="w-9/12 p-10 mx-4">
			<h2 className="text-4xl text-center font-bold">Please Payment!! </h2>
			<Elements stripe={stripePromise}>
				<CheckoutForm singleClass={singleClass} price={singleClass?.price}></CheckoutForm>
			</Elements>

		</div>

	);
};

export default Payment;