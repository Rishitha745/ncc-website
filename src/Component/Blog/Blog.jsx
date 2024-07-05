import React from "react";
import Title from "../../UI/Title";
import img1 from "../../assets/ncc3.jpg";
import Card from "./Card";
import Certificates from "./Certificates";
import MainLayout from "../../UI/MainLayout";

const blogArray = [
  {
    id: 1,
    hero: img1,
    title: "Drills and Skills",
    content:
      " NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.",
    maincontent:
      "NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.",
    carousel: [{ img: img1 }, { img: img1 }, { img: img1 }, { img: img1 }],
  },
  {
    id: 2,
    hero: img1,
    title: "Obstacle Course",
    content:
      " NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.",
    maincontent:
      "NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drillsNCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drillsNCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.",
    carousel: [{ img: img1 }, { img: img1 }, { img: img1 }, { img: img1 }],
  },
  {
    id: 3,
    hero: img1,
    title: "Classes and Courses",
    content:
      " NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.",
    maincontent:
      "NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.",
    carousel: [{ img: img1 }, { img: img1 }, { img: img1 }, { img: img1 }],
  },
  {
    id: 4,
    hero: img1,
    title: "Obstacle Course",
    content:
      " NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.",
    maincontent:
      "NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills. NCC is a great platform to learn new skills and drills.",
    carousel: [{ img: img1 }, { img: img1 }, { img: img1 }, { img: img1 }],
  },
  {
    id: 5,
    hero: img1,
    title: "Classes and Courses",
    content:
      " NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.",
    maincontent:
      "NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.NCC is a great platform to learn new skills and drills.",
    carousel: [{ img: img1 }, { img: img1 }, { img: img1 }, { img: img1 }],
  },
];

const Blog = () => {
  return (
    <div>
    <MainLayout>
      <Title>Blog By IIT-H</Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 px-5 mb-20">
        {blogArray.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
      <Certificates />
      </MainLayout>
    </div>
  );
};

export default Blog;
