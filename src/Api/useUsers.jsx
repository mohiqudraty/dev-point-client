import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxios/useAxiosPublic";

const useUsers = () => {
  const axiosPublic = useAxiosPublic();
  // all post api
  const { data: users = [], refetch} = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosPublic.get("all-users");
      return res.data;
    },
  });

  return { users, refetch };
};

export default useUsers;