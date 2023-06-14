import { Flip, Zoom } from "react-awesome-reveal";
import useTitle from "../../../../../../useTitle";
const StudentHome = () => {
	useTitle('Student Home');
	return (
		<div className="flex items-center">
			<Zoom>
				<div className="border shadow-md bg-green-600 text-white text-center p-10 m-10">
					<h2 className="text-5xl font-extrabold">Welcome to Visit Global Language Academy!!</h2>

					<Flip>
						<p className="text-4xl text-green-800 py-10 font-extrabold">You are Logged in as a Student</p>
					</Flip>
					<Zoom>

						<p className="text-3xl text-blue-800 py-10 font-semibold">This is an Educational Platform.Specially It is organize for summer-camp.You can Find your favorite and expert instructor here.So Booked your favorite course and enjoy!!!!</p>
					</Zoom>
				</div>
				
			</Zoom>
			
		</div>
	);
};

export default StudentHome;