import { useState } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import Select from "react-select";
const options = [
  { value: "Security", label: "Security" },
  { value: "Bootstrap", label: "Bootstrap" },
  { value: "React Native", label: "React Native" },
  { value: "Node.js", label: "Node.js" },
  { value: "CSS", label: "CSS" },
  { value: "Python", label: "Python" },
  { value: "GraphQL", label: "GraphQL" },
  { value: "React", label: "React" },
  { value: "Database", label: "Database" },
  { value: "Frontend", label: "Frontend" },
  { value: "DevOps", label: "DevOps" },
  { value: "Machine Learning", label: "Machine Learning" },
  { value: "WebSockets", label: "WebSockets" },
  { value: "UI/UX", label: "UI/UX" },
  { value: "MongoDB", label: "MongoDB" },
  { value: "React", label: "React" },
  { value: "JavaScript", label: "JavaScript" },
];
// Security
// Bootstrap
// React Native
// Node.js
// CSS
// Python
// GraphQL
// React
// Database
// Frontend
// DevOps
// Machine Learning
// WebSockets
// UI/UX
// MongoDB
// React
// JavaScript

const AddPost = () => {
  const { user } = useAuth();
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="pt-10">
      <h2 className="text-3xl font-semibold text-center my-10">Add Post</h2>
      <form className="max-w-[90%] p-3 mx-auto">
        {/* author name and email  */}
        <div className="flex flex-col md:flex-row md:gap-8 justify-center">
          {/* name  */}
          <div className="mb-5 w-full">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              defaultValue={user && user.displayName}
              readOnly
              name="name"
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:gray-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-600 dark:shadow-sm-light"
              placeholder=""
              required
            />
          </div>
          {/* email  */}
          <div className="mb-5 w-full">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              defaultValue={user && user.email}
              readOnly
              name="email"
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:gray-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-600 dark:shadow-sm-light"
              placeholder=""
              required
            />
          </div>
        </div>
        {/* title author image  */}
        <div className="flex flex-col md:flex-row md:gap-8 justify-center">
          {/* title  */}
          <div className="mb-5 w-full">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              name="title"
              type="text"
              id="title"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:gray-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-600 dark:shadow-sm-light"
              placeholder=""
              required
            />
          </div>
          {/* image  */}
          <div className="mb-5 w-full">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Image
            </label>
            <input
              defaultValue={user && user.photoURL}
              readOnly
              name="image"
              type="text"
              id="image"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:gray-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-600 dark:shadow-sm-light"
              placeholder=""
              required
            />
          </div>
        </div>
        {/* description and tag  */}
        <div className="flex flex-col md:flex-row md:gap-8 justify-center">
          {/* description  */}
          <div className="mb-5 w-full">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              name="description"
              type="text"
              id="description"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:gray-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-600 dark:shadow-sm-light"
              placeholder=""
              required
            />
          </div>
          {/* tag  */}
          <div className="mb-5 w-full">
            <label
              htmlFor="tag"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tag
            </label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>
        </div>
        {/* upVote and downVote */}
        <div className="flex flex-col md:flex-row md:gap-8 justify-center">
          {/* up vote  */}
          <div className="mb-5 w-full">
            <label
              htmlFor="upVote"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Up Vote
            </label>
            <input
              defaultValue={0}
              name="upVote"
              type="number"
              id="upVote"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:gray-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-600 dark:shadow-sm-light"
              placeholder=""
              required
            />
          </div>
          {/* Down Vote  */}
          <div className="mb-5 w-full">
            <label
              htmlFor="downVote"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Down Vote
            </label>
            <input
              defaultValue={0}
              name="downVote"
              type="number"
              id="downVote"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:gray-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-600 dark:shadow-sm-light"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="text-white w-full bg-slate-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-gary-700 dark:focus:ring-slate-800"
          >
            Add post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
