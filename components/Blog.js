import Link from "next/link";

const Blog = ({ blog }) => {
  return (
    <div>
      <span>{blog.blogId}</span>
      <Link href={`/blogs/${blog.blogId}`}>
        <a>
          {" : "}
          <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
            {blog.blogTitle}
          </span>
        </a>
      </Link>
    </div>
  );
};

export default Blog;
