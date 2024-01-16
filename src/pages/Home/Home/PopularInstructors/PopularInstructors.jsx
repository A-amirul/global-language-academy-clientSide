import useInstructors from "../../../../hooks/useInstructors";
import InstructorCard from "../Instructors/InstructorCard";

const PopularInstructors = () => {
	const [instructors] = useInstructors();

	return (
		<div>
			<h2 className="text-5xl font-medium text-primary text-center py-10">Popular Instructors</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
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