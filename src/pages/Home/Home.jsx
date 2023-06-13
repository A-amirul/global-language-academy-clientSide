import useTitle from "../../../useTitle";
import About from "../../components/About";
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
			<About></About>
		</div>
	);
};

export default Home;