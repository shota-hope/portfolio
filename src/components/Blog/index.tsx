import { Button } from "@mantine/core";
import Link from "next/link";

export function Blog() {
  const blogs = [
    {
      title: "This is a header",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
      date: "2022.07.11"
    },
    {
      title: "This is a header",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
      date: "2022.07.11"
    },
    {
      title: "This is a header",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
      date: "2022.07.11"
    },
    {
      title: "This is a header",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
      date: "2022.07.11"
    },
  ];

  return (
    <>
      <h1>Blog</h1>
      {blogs.map((blog) => (
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <p className="text-gray-500">{blog.date}</p>
        </div>
      ))}
      <div className="flex justify-center mt-6">
        <Button color="dark" radius="xl" size="md">
          View All
        </Button>
      </div>
    </>
  );
}
