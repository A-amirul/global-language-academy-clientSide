import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useMyClass = () => {
	const { user } = useContext(AuthContext);

	const { refetch, data: myClass= [] } = useQuery({
		queryKey: ['myClass', user?.email],
		queryFn: async () => {
			const res = await fetch(`http://localhost:5000/myClass?email=${user?.email}`)
			return res.json();
		}
	})
	return [myClass,refetch];
};

export default useMyClass;