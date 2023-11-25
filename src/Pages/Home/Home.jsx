import { Button } from "@mui/material";
import usePost from "../../Api/usePost";
import Banner from "./Banner/Banner";
import Post from "./Post/Post";

const Home = () => {
  const { posts } = usePost();
  return (
    <div>
      {/* banner with search input */}
      <Banner></Banner>
      {/* all post section */}
      <div>
        {posts?.map((post, i) => (
          <Post key={i} post={post}></Post>
        ))}
      </div>
      {/* tag section */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-center my-6 font-bold">All Tags</h3>
        {posts.map((post, index) => (
          <Button key={index}>#{post?.tag}</Button>
        ))}
      </div>
    </div>
  );
};

export default Home;
