import React, { useState, useEffect } from "react";

import postApi from "apis/posts";

import Navbar from "../commons/Navbar";
import Sidebar from "../commons/Sidebar";
import PostItem from "../Posts/PostItem";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isPaneOpen, setIsPaneOpen] = useState(false);

  const fetchPosts = async () => {
    try {
      const { data: posts } = await postApi.fetch();
      setPosts(posts);
    } catch (error) {
      logger.error(error);
    }
    // } finally {
    //   setLoading(false);
    // }
  };

  const updatePane = value => {
    setIsPaneOpen(value);
  };

  useEffect(() => {
    fetchPosts();
  }, [isPaneOpen]);

  return (
    <div className="ml-36 h-screen">
      <Sidebar />
      <Navbar
        {...{
          title: "Posts",
          isPaneOpen,
          updatePane,
        }}
      />
      <div className="p-2">
        {posts.map(postItem => (
          <PostItem {...postItem} key={postItem.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
