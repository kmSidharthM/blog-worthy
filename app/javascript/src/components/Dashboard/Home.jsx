import React, { useState, useEffect } from "react";

import { Spinner } from "@bigbinary/neetoui";

import postApi from "apis/posts";

import Navbar from "../commons/Navbar";
import Sidebar from "../commons/Sidebar";
import PostItem from "../Posts/PostItem";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const { data: posts } = await postApi.fetch();
      setPosts(posts);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updatePane = value => {
    setIsPaneOpen(value);
  };

  useEffect(() => {
    fetchPosts();
  }, [isPaneOpen]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner theme="dark" />
      </div>
    );
  }

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
