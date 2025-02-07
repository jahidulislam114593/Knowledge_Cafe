import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmarks, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3 pt-4">
      {blogs.map((blog) => (
        <Blog
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkAsRead={handleMarkAsRead}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blogs;
