import { useEffect, useState } from "react";
import Card from "./components/card";
import Navbar from "./components/Navbar";
import axios from "axios";
function Home() {
  const [blogs, setBlogs] = useState([]);
  async function fetchBlogs() {
    const response = await axios.get(
      "https://687af358abb83744b7ee4679.mockapi.io/blogs"
    );
    if (response.status == 200) {
      setBlogs(response.data);
    } else {
      alert("Error aayoo !!!"); 
    }
  }
  useEffect(() => {
    // Anonymous/ Callback function
    fetchBlogs();
  }, []); // Dependency Array
  console.log(blogs, "This is blogs");

  return (
    <>
      <Navbar />
      <div className="flex flex-row flex-wrap">
        
        {blogs.map(function (blogs) {
          return(
           <Card key={blogs.id} blog = {blogs}/>
          )
        })}
      </div>

      
    </>
  );
}
export default Home;
