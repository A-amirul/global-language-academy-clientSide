import useTitle from "../../../../../useTitle";
import useInstructors from "../../../../hooks/useInstructors";

const Instructors = () => {
	const [instructors] = useInstructors();

	useTitle("Instructors");
	return (
		<div>
			<h2>Instructor:{instructors?.length}</h2>
		</div>
	);
};

export default Instructors;