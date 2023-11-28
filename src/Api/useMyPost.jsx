import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth/useAuth";
import useAxiosPublic from "../Hooks/useAxios/useAxiosPublic";


const useMyPost = () => {
    const [myPost, setMyPost] = useState([])
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        axiosPublic.get(`my-posts?email=${user?.email}`)
        .then(res => {
          console.log(res.data);
          setMyPost(res.data)
        })
      },[axiosPublic, user?.email])
      return myPost
};

export default useMyPost;