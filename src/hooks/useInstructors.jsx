import { useEffect } from "react";
import { useState } from "react";

const useInstructors = () => {
	const [instructors, setInstructors] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://global-language-academy-server-sable.vercel.app/instructors')
			.then(res => res.json())
			.then(data => {
				setInstructors(data);
				setLoading(false);
			})
	}, [])
	return [instructors, loading];
};

export default useInstructors;