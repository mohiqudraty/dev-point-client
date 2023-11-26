/* eslint-disable no-unused-vars */
import moment from "moment";
import { useEffect, useState } from "react";
import { BiComment, BiDownvote, BiShare, BiUpvote } from "react-icons/bi";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxios/useAxiosPublic";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import toast from "react-hot-toast";

const PostDetails = () => {
  const axiosPublic = useAxiosPublic();
  const [post, setPost] = useState({});
  const { id } = useParams();
  console.log(id);

  const shareUrl = `http://localhost:5173/post/${id}`;
  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success(`Link copied!`);
  };

  useEffect(() => {
    axiosPublic.get(`single-post/${id}`).then((res) => {
      setPost(res.data);
      console.log(res.data);
    });
  }, [id, axiosPublic]);

  const {
    _id,
    authorImage,
    authorName,
    authorEmail,
    postTitle,
    postDescription,
    tag,
    postedTime,
    upVote,
    downVote,
  } = post || {};
  const formattedDate = moment(postedTime).format("MMMM Do YYYY, h:mm:ss a");
  return (
    <section>
      <div className="max-w-4xl mx-auto px-10 my-4 py-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <a className="flex items-center">
              <img
                className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                src={authorImage}
                alt="avatar"
              />
              <h1 className="text-gray-700 font-bold mr-2">{authorName}</h1>
              <span className="font-light text-gray-600">{formattedDate}</span>
            </a>
          </div>

          <a
            className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
            href="#"
          >
            {tag}
          </a>
        </div>
        <div className="mt-2">
          <h3 className="text-2xl text-gray-700 font-bold cursor-pointer hover:text-gray-600">
            {postTitle}
          </h3>
          <p className="mt-2 text-gray-600">{postDescription}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center justify-center gap-5">
            <button>
              <BiUpvote className="cursor-pointer inline" />
              {upVote}
            </button>
            <button>
              <BiDownvote className="cursor-pointer inline" />
              {downVote}
            </button>

            <BiComment className="cursor-pointer inline" />

            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="btn">
              <BiShare className="cursor-pointer inline" />
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h3 className="text-lg font-bold">Share With Friends</h3>
                <div className="flex gap-5 my-3">
                  {/* Facebook Share Button */}
                  <FacebookShareButton url={shareUrl} quote={postTitle}>
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  {/* Twitter Share Button */}
                  <TwitterShareButton url={shareUrl} title={postTitle}>
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>

                  {/* WhatsApp Share Button */}
                  <WhatsappShareButton url={shareUrl} title={postTitle}>
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>

                  {/* Email Share Button */}
                  <EmailShareButton url={shareUrl} subject={postTitle}>
                    <EmailIcon size={32} round />
                  </EmailShareButton>

                  {/* Button to Copy Link */}
                  <button className="btn" onClick={handleCopy}>
                    Copy Link
                  </button>
                </div>
              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
