// Dave gray react router https://www.youtube.com/watch?v=eHnqS9kMH-s

import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = ({ blogList }) => {
  const { id } = useParams();
  const blogPost = blogList.find((blog) => blog.id == parseInt(id));
  return (
    <div>
      <h3>{blogPost.title}</h3>
      <p>{blogPost.body}</p>
    </div>
  );
};

export default BlogPost;
