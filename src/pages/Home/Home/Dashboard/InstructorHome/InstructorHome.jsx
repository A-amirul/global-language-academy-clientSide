import { Zoom } from "react-awesome-reveal";

const InstructorHome = () => {
	return (
		<div className="flex items-center">
			<Zoom>
				<div className="border shadow-md bg-green-600 text-white text-center p-10 m-10">
					<h2 className="text-5xl font-extrabold">Welcome to Visit Global Language Academy!!</h2>

					<p className="text-4xl text-green-800 py-10 font-extrabold">You are Logged in as a Instructor</p>

					<p className="text-3xl text-blue-800 py-10 font-semibold">This is an Educational Platform.Specially It is organize for summer-camp.You can tech your favorite language courses.So add your favorite Courses. Please Explore your dashboard!!!!</p>

				</div>

			</Zoom>

		</div>
	);
};

export default InstructorHome;