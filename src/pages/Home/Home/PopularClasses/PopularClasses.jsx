import useClasses from "../../../../hooks/useClasses";
import ClassCard from "./ClassCard";

const PopularClasses = () => {
	const [classes] = useClasses();
	return (
		<div>
			<h1 className="text-5xl text-center font-medium py-10">Popular Classes</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{
					classes?.map(pClass=><ClassCard
					key={pClass._id}
					pClass={pClass}
				></ClassCard>)
				}
			</div>
		</div>
	);
};

export default PopularClasses;