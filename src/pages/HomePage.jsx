import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import PostCard from "../components/common/PostCard";
import PostForm from "../components/common/PostForm";
import PostDataService from "../dataServices/postDataService";
import PageHomeSideNav from "../components/layout/PageHomeSideNav";
const HomePage = () => {
  const [posts, setPosts] = useState([]);

  /**
   * Get all the posts from the database.
   */
  const getPosts = () => {
    PostDataService.getAll()
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(`\nError retrieving posts from database.`);
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  let displayPosts = <></>;
  if (posts.length !== 0) {
    displayPosts = posts.map((post) => <PostCard props={post} />);
  }

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="d-flex">
        <PageHomeSideNav />
          <div>
          <PostForm user_id={2} />
          {displayPosts}
          </div>
        </div>
    </div>
  );
};

export default HomePage;
