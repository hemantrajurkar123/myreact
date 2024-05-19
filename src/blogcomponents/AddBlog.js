import React from "react";

const AddBlog = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
  return (
    <>
      <h4>Add a Blog Post</h4>
      <form className="" onSubmit={handleSubmit}>
        <label htmlFor="postTitle"></label>
        <input
          id="postTitle"
          type="text"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="postTitle"></label>
        <textarea
          id="postBody"
          type='text'
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddBlog;
