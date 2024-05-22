import React from "react";
import { useState, useEffect } from "react";
import ChildMap from "./ChildMap";

const MapPractice = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the source");
          }
          return res.json;
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 1000);
  }, []);
  return (
    <div>
      {isPending && <div>loading...</div>}
      {blogs && <ChildMap blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default MapPractice;
