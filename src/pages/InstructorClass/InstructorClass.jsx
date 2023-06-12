import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const InstructorClass = () => {
	const [classes, setClasses] = useState();
	const { user } = useContext(AuthContext);

	const allClasses = useLoaderData();

	const userClasses = allClasses?.filter(instructorClass => user?.email === instructorClass?.email);
	console.log(classes);
	useEffect(() => {
		setClasses(userClasses)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<div>
			<h2>My Class:{classes?.length}</h2>
		</div>
	);
};

export default InstructorClass;