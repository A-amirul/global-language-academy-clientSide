import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMyClass = () => {
	const { user,loading } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();


	const { refetch, data: myClass= [] } = useQuery({
		queryKey: ['myClass', user?.email],
		enabled:!loading,
		queryFn: async () => {
			const res = await axiosSecure(`/myClass?email=${user?.email}`)
			return res.data;
		}
		
	})
	return [myClass,refetch];
};

export default useMyClass;