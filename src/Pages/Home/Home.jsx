import useAxiosPublic from "../../Hooks/useAxios/useAxiosPublic";
import Post from "./Post/Post";
import { useEffect, useState } from "react";

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axiosPublic.get("/all-post").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, [axiosPublic]);
  return (
    <div>
      {posts?.map((post, i) => (
        <Post key={i} post={post}></Post>
      ))}
    </div>
  );
};

export default Home;
