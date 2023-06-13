import useClasses from "../../hooks/useClasses";

const AllClass = () => {
	const [classes] = useClasses();
	
	return (
		<div>
			<h2>All Class:{classes?.length}</h2>
		</div>
	);
};

export default AllClass;