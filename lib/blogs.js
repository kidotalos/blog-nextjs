import fetch from "node-fetch";

const apiUrl = "http://localhost:3001/blogs";

// ここでnestjs(API)のブログ一覧を取得している
export async function getAllBlogsData() {
  const res = await fetch(new URL(apiUrl));
  const blogs = await res.json();
  return blogs;
}

export async function getAllBlogIds() {
  const res = await fetch(new URL(apiUrl));
  const blogs = await res.json();
  return blogs.map((blog) => {
    return {
      params: {
        blogId: String(blog.blogId),
      },
    };
  });
}

export async function getBlogData(blogId) {
  const res = await fetch(new URL(`${apiUrl}/${blogId}/`));
  const blog = await res.json();
  return {
    blog,
  };
}
