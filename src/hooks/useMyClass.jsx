import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMyClass = () => {
	const { user } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();


	const { refetch, data: myClass= [] } = useQuery({
		queryKey: ['myClass', user?.email],
		queryFn: async () => {
			const res = await axiosSecure(`/myClass?email=${user?.email}`)
			console.log('res from axios',res);
			return res.data;
		}
		
	})
	return [myClass,refetch];
};

export default useMyClass;