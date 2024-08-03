import PropTypes from "prop-types";
import { GoBookmark } from "react-icons/go";

const Blog = ({ blog, handleAddToBookmarks }) => {
  const {
    title,
    cover,
    author_img,
    author,
    reading_time,
    posted_date,
    hashtag,
  } = blog;
  return (
    <div className="mb-20 border-b-2">
      <img className="w-full mb-8 rounded-lg" src={cover} alt="" />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14  rounded-full" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-3xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={handleAddToBookmarks}
            className="ml-2 text-2xl text-red-600"
          >
            <GoBookmark />
          </button>
        </div>
      </div>
      <h4 className="text-4xl">{title}</h4>
      <p>
        {hashtag.map((hash, idx) => (
          <span key={idx}>
            <a href=""> {hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
