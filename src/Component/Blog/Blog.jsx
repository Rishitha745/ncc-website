import React from "react";
import Title from "../../UI/Title";
import BlogCard from "./BlogCard";
import Certificates from "./Certificates";
import { blogArray } from "../../Constants";
import MainLayout from "../../UI/MainLayout";

const Blog = () => {
  return (
    <>
      <MainLayout>
        <Title>Training at IITH</Title>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 px-6 mb-6 sm:mb-10">
          {blogArray.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <Certificates />
      </MainLayout>
    </>
  );
};

export default Blog;
