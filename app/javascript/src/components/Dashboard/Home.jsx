import React, { useState, useEffect } from "react";

import postApi from "../../apis/posts";
import Navbar from "../commons/Navbar";
import Sidebar from "../commons/Sidebar";
import PostItem from "../Posts/PostItem";

const Home = () => {
  const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const {
        data: { posts },
      } = await postApi.fetch();
      setPosts(posts);
    } catch (error) {
      logger.error(error);
    }
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="ml-32 h-screen">
      <Sidebar />
      <Navbar title="Posts" />
      {posts.map(post => (
        <PostItem {...post} key={post.id} />
      ))}
    </div>
  );
};

export default Home;
