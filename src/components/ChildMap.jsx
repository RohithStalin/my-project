import React from "react";

const ChildMap = ({ blogs, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {blogs.map((blog) => (
          <div className="list" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChildMap;
