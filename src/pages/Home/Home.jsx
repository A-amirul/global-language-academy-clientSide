import useTitle from "../../../useTitle";
import Banner from "./Home/Banner/Banner";
import PopularClasses from "./Home/PopularClasses/PopularClasses";
import PopularInstructors from "./Home/PopularInstructors/PopularInstructors";

const Home = () => {

	useTitle("Home");
	return (
		<div>
			<Banner></Banner>
			<PopularClasses></PopularClasses>
			<PopularInstructors></PopularInstructors>
		</div>
	);
};

export default Home;