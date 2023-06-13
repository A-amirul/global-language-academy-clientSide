import { useContext,} from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useClasses from "../../hooks/useClasses";

const InstructorClass = () => {
	const { user } = useContext(AuthContext);
	const [classes] = useClasses();

	const userClasses = classes?.filter(instructorClass => user?.email === instructorClass?.email);
	console.log(userClasses);
	
	return (
		<div>
			<h2 className="text-5xl font-bold text-center p-10">My Classes:{userClasses?.length}</h2>
		</div>
	);
};

export default InstructorClass;