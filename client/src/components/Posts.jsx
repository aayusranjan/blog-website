import React from "react";
import "./Posts.css";
import Post from "./Post";

export function Posts(){
  const blogPosts = [
    {
      title: "JAVASCRIPT",
      body: `JavaScript is the world most popular
	lightweight, interpreted compiled programming
	language. It is also known as scripting
	language ..`,
      author: "Nishant Singh ",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    },
    {
      title: "Data Structure ",
      body: `There are many real-life examples of
	a stack. Consider an example of plates stacked
	over one another in the canteen. The plate
	which is at the top is the first one to be
	removed,`,
      author: "Suresh Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
    },
    {
      title: "Algorithm",
      body: `The word Algorithm means “a process
	or set of rules to be followed in calculations
	or other problem-solving operations”. Therefore
	Algorithm ... `,
      author: "Monu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
      title: "Computer Network",
      body: `An interconnection of multiple devices,
	also known as hosts, that are connected using
	multiple paths for the purpose of sending/
	receiving data... `,
      author: "Sonu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
  ];

  return (
        <div className="posts-container">
          {blogPosts.map((post, index) => (
            <Post key={index} index={index} post={post} />
          ))}
        </div>
  );
};

// export  Posts;
