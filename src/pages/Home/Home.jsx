import { useState } from "react";
import useTitle from "../../../useTitle";
import Banner from "./Home/Banner/Banner";
import PopularClasses from "./Home/PopularClasses/PopularClasses";
import PopularInstructors from "./Home/PopularInstructors/PopularInstructors";

const Home = () => {

	useTitle("Home");

			const [isDarkMode, setIsDarkMode] = useState(false);

	const handleToggle = () => {
				setIsDarkMode(!isDarkMode);
	};

			return (
			<div className={`bg-${isDarkMode ? 'gray-900' : 'gray-100'} min-h-screen text-${isDarkMode ? 'white' : 'gray-800'}`}>
				<Banner></Banner>
				<PopularClasses></PopularClasses>
				<PopularInstructors></PopularInstructors>

				<button
					className={`fixed bottom-4 right-4 rounded-full p-2 bg-${isDarkMode ? 'yellow-400' : 'gray-600'} text-white`}
					onClick={handleToggle}
				>
					{isDarkMode ? 'Light Mode' : 'Dark Mode'}
				</button>
			</div>

	);
};

export default Home;