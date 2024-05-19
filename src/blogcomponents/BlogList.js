// Dave gray react router https://www.youtube.com/watch?v=eHnqS9kMH-s

import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogList }) => {
  console.log("Blog List", blogList);
  return (
    <div>
      {blogList.map((blog) => {
        return (
          <>
            <Link to={`blogs/${blog.id}`}>
              <div key={blog.id}>{blog.title}</div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default BlogList;
