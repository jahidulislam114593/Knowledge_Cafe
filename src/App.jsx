import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmarks = (blogs) => {
    console.log("Comming Soon Bookmarks");
  };
  return (
    <div>
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
}

export default App;
