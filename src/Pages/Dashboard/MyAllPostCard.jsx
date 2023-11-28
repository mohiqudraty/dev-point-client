/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";


const MyAllPostCard = ({post}) => {
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
    return (
      <>
        {/* row 1 */}
        <tr>
        <th>{postTitle}</th>
        <td>{upVote + downVote }</td>
        <td><Link to={`/dashboard/comments/${_id}`} className="hover:bg-slate-500 p-1 rounded-sm">Comment</Link></td>
        <td><button className="hover:bg-yellow-600 p-1 rounded-sm">Delete</button></td>
      </tr></>
    );
};

export default MyAllPostCard;