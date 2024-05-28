import React, { useState } from "react";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("stark");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    console.log(blog);
  };

  return (
    <div className="w-[50%] h-[50%] border border-solid rounded-lg ml-40 mt-40 mb-40 overflow-visible shadow-lg p-3">
      <h1 className="text-3xl text-orange-700 text-center m-2">Blog Form</h1>
      <form className="flex flex-col m-5" onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          className="w-365 h-14 border border-gray-800 mb-4 rounded-lg p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          className="w-365 h-14 border border-gray-800 mb-4 rounded-lg p-2"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author</label>
        <select
          className="w-365 h-14 border border-gray-800 mb-4 rounded-lg p-2 mt-3"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option>Lannister</option>
          <option>stark</option>
        </select>
        <button
          className="border-r-emerald-700 bg-orange-600 text-white border w-36 rounded-full"
          type="submit"
        >
          Add Blog
        </button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default BlogForm;
