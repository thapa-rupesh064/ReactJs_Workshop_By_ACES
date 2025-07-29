import axios from "axios";
import NavBar from "./Components/Nav";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function Single() {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  // Delete blog by ID
  async function deleteBlog() {
    try {
      const resp = await axios.delete(
        "https://687af358abb83744b7ee4679.mockapi.io/blogs/" + id
      );
      if (resp.status === 200) {
        alert("Deleted Successfully !!!");
        navigate("/");
      } else {
        alert("Error occurred while deleting!");
      }
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Delete failed due to network issue!");
    }
  }

  // Fetch single blog by ID
  async function getSingle() {
    try {
      const resp = await axios.get(
        "https://687af358abb83744b7ee4679.mockapi.io/blogs/" + id
      );
      if (resp.status === 200) {
        setBlog(resp.data);
        document.title = resp.data.title || "Blog Details";
      } else {
        alert("Error fetching blog!");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Network error while fetching blog!");
    }
  }

  useEffect(() => {
    getSingle();
  }, []);

  if (!blog) {
    return <p className="text-center text-gray-500 mt-10">Loading blog...</p>;
  }

  return (
    <>
      <NavBar />

      <div className="bg-white font-sans leading-normal tracking-normal">
        <div className="text-center pt-16 md:pt-32">
          <p className="text-sm md:text-base text-green-500 font-bold">
            {blog.createdAt} <span className="text-gray-900">/</span> GETTING
            STARTED
          </p>
          <h1 className="font-bold break-normal text-3xl md:text-5xl">
            {blog.title}
          </h1>
        </div>

        {/* Blog Image */}
        <div className="container w-[50%] h-[50%] max-w-6xl mx-auto bg-white bg-cover mt-8 rounded mb-12">
          <img src={blog.image} alt={blog.title} />
        </div>

        {/* Blog Content */}
        <div className="container max-w-5xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
            <div
              className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {blog.description}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={deleteBlog}
            className="bg-red-100 text-red-600 px-6 py-2 rounded-full font-semibold border border-red-300 hover:bg-red-600 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            Delete Blog
          </button>

          <Link to={"/edit/blogs/" + blog.id}>
            <button className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-semibold border border-blue-300 hover:bg-blue-600 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out">
              Edit Blog
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Single;
