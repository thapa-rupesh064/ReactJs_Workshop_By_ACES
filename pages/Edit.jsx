import { useParams } from "react-router-dom";
import NavBar from "./Components/Nav";

function Edit() {
  const data = useParams()
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  function sentEditdata(e){
    e.preventDefault()
    axios.put("https://687af358abb83744b7ee4679.mockapi.io/blogs" + data.id, {
      title : title,
      subtitle: subtitle,
      description : description,
      image : image
    })
    if(Response.status == 200){
      navigate("single/" + data.id)
    }else{
      alert("Error happened")
    }
  }
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Add New Blog Post</title>
        <section className="flex-grow container mx-auto p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create a New Blog Post
          </h1>
        <form onSubmit={sentDataToBackend} 
           
            className="p-8 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter blog title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/*image*/}
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter blog title"
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-700 font-semibold mb-2"
              >
                Image
              </label>
              <input
                type="text"
                id="image"
                name="image"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image url"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            {/* description */}
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your blog content here"
                onChange={(e) => setDescription(e.target.value)}
                defaultValue={""}
              />
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Edit Post
              </button>
            </div>
        </form>
        </section>
      </div>
    </>
  );
}

export default Edit;
