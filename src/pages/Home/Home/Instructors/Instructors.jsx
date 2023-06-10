import useInstructors from "../../../../hooks/useInstructors";

const Instructors = () => {
	const [instructors] = useInstructors();
	return (
		<div>
			<h2>Instructor:{instructors?.length}</h2>
		</div>
	);
};

export default Instructors;