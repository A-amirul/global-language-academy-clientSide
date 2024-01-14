import useInstructors from "../../../../hooks/useInstructors";
import InstructorCard from "../Instructors/InstructorCard";

const PopularInstructors = () => {
	const [instructors] = useInstructors();

	return (
		<div>
			<h2 className="text-5xl font-medium text-white text-center py-10">Popular Instructors</h2>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{
					instructors?.map(instructor => <InstructorCard
						key={instructor._id}
						instructor={instructor}
					></InstructorCard>)
				}
			</div>
		</div>
	);
};

export default PopularInstructors;