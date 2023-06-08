import useTitle from "../../../useTitle";
import Banner from "./Home/Banner/Banner";

const Home = () => {

	useTitle("Home");
	return (
		<div>
			<Banner></Banner>
		</div>
	);
};

export default Home;