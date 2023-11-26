import { Button } from "@mui/material";
import usePost from "../../Api/usePost";
import Banner from "./Banner/Banner";
import Post from "./Post/Post";

import useAxiosPublic from "../../Hooks/useAxios/useAxiosPublic";
import { useState } from "react";

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const [searchedPost, setSearchedPost] = useState([]);
  const { posts } = usePost();
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const tag = form.tag.value;
    console.log(tag);
    axiosPublic.get(`all-post?tag=${tag}`).then((res) => {
      console.log(res.data);
      setSearchedPost(res.data);
    });
  };
  return (
    <div>
      {/* banner with search input */}
      <Banner handleSearch={handleSearch}></Banner>
      {/* all post section */}
      <div>
        {!searchedPost.length ? (
          <div>
            {" "}
            {posts?.map((post) => (
              <Post key={post._id} post={post}></Post>
            ))}
          </div>
        ) : (
          <div>
            {" "}
            {searchedPost?.map((post) => (
              <Post key={post._id} post={post}></Post>
            ))}
          </div>
        )}
      </div>
      {/* tag section */}
      <div className="max-w-3xl mx-auto text-center">
        <h3 className=" my-6 font-bold">All Tags</h3>
        {posts.map((post, index) => (
          <Button key={index}>#{post?.tag}</Button>
        ))}
      </div>
      {/* announcement section  */}
      <div></div>
    </div>
  );
};

export default Home;
