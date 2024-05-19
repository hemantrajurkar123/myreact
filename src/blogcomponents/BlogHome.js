
// Dave gray react router https://www.youtube.com/watch?v=eHnqS9kMH-s
import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";
import AddBlog from "./AddBlog";
import ErrorPage from "./ErrorPage";
import useFetch from "../hooks/useFetch";
import { Routes, Route } from "react-router-dom";

const BlogHome = () => {
  const [blogList, setBlogsList] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const {
    data: blogs,
    error,
    loading,
  } = useFetch("https://dummyjson.com/posts");

  useEffect(() => {
    if (blogs) {
      setBlogsList(blogs.posts);
    }
  }, [blogs]);

  useEffect(() => {
    // if(blogList){
    console.log(blogList);
    // }
  }, [blogList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = blogList.length ? blogList[blogList.length - 1].id + 1 : 1;
    const newPost = { id, title:postTitle, body:postBody };
    const allBlogPosts = [...blogList, newPost];
    setBlogsList(allBlogPosts);
  };

  if (loading) {
    return <p>Fetching Posts...</p>;
  }

  if (error) {
    return <p>Error fetching blog posts</p>;
  }

  return (
    <Routes>
      {/* <Route path="/" element={<BlogHome />} /> */}
      <Route path="/" element={<BlogList blogList={blogList} />} />
      <Route path="/blogs/:id" element={<BlogPost blogList={blogList} />} />
      <Route
        path="/newpost"
        element={
          <AddBlog
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            handleSubmit={handleSubmit}
          />
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default BlogHome;
