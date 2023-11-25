import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxios/useAxiosPublic";

const usePost = () => {
  const axiosPublic = useAxiosPublic();
  const { data: posts = [] } = useQuery({
    queryKey: ["all-post"],
    queryFn: async () => {
      const res = await axiosPublic.get("all-post");
      return res.data;
    },
  });
  return { posts };
};

export default usePost;
