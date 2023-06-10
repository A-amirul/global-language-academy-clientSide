import useClasses from "../../../../hooks/useClasses";

const PopularClasses = () => {
	const [classes] = useClasses();
	return (
		<div>
			<h2>Popular Classes:{classes?.length}</h2>
		</div>
	);
};

export default PopularClasses;