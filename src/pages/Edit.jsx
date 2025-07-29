import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./Components/Nav";
import axios from "axios";
import { useEffect, useState } from "react";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Initial state
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  // Fetch existing blog
  async function fetchBlog() {
    try {
      const response = await axios.get(
        "https://687af358abb83744b7ee4679.mockapi.io/blogs/" + id
      );
      if (response.status === 200) {
        const blog = response.data;
        setTitle(blog.title);
        setSubtitle(blog.subtitle);
        setDescription(blog.description);
        setImage(blog.image);
      }
    } catch (err) {
      console.error("Error fetching blog:", err);
      alert("Error loading blog");
    }
  }

  useEffect(() => {
    fetchBlog();
  }, []);

  // Edit blog handler
  async function editBlog(e) {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://687af358abb83744b7ee4679.mockapi.io/blogs/" + id,
        {
          title,
          subtitle,
          description,
          image,
        }
      );
      if (response.status === 200) {
        alert("Edited successfully!");
        navigate("/single/" + id); // Add slash!
      } else {
        alert("Error occurred while editing");
      }
    } catch (err) {
      console.error("Error updating blog:", err);
      alert("Request failed");
    }
  }

  return (
    <>
      <NavBar />

      <div>
        <title>Edit Blog Post</title>
        <section className="flex-grow container mx-auto p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Edit Blog Post
          </h1>
          <form
            className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
            onSubmit={editBlog}
          >
            {/* Title */}
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-semibold mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subtitle */}
            <div className="mb-4">
              <label
                htmlFor="subtitle"
                className="block text-gray-700 font-semibold mb-2"
              >
                Sub Title
              </label>
              <input
                type="text"
                id="subtitle"
                name="subtitle"
                required
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Image */}
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-700 font-semibold mb-2"
              >
                Image URL
              </label>
              <input
                type="text"
                id="image"
                name="image"
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-semibold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your blog content here"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Confirm Changes
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default Edit;
