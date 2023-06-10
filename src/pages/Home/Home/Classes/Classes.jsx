import useTitle from "../../../../../useTitle";
import useClasses from "../../../../hooks/useClasses";

const Classes = () => {
	const [classes] = useClasses();

	useTitle("Classes");
	return (
		<div>
			<h2>Classes:{classes?.length}</h2>
		</div>
	);
};

export default Classes;