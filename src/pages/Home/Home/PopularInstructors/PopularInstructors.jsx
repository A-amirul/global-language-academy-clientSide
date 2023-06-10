import useInstructors from "../../../../hooks/useInstructors";

const PopularInstructors = () => {
	const [instructors] = useInstructors();
	return (
		<div>
			<h2>Popular Instructors:{instructors?.length}</h2>
		</div>
	);
};

export default PopularInstructors;