import { posts } from "@/data/posts";
import type { Post } from "@/types/Post";

interface Posts {
  posts: Post[];
}

function BlogShow({ posts }: Posts) {
  return (
    <>
      <h1 className="font-bold text-2xl ml-8 mt-8">Latest Blog Posts</h1>
      <div className="grid md:grid-cols-3 gap-8 m-8">
        {posts.map((post) => (
          <div className="space-y-2">
            <img src={post.image} alt="Blog Post" className="rounded-md" />
            <h3 className="text-md font-bold">{post.title}</h3>
            <span className="line-clamp-3">{post.content}</span>
            <span className="text-sm font-light">
              by <span className="font-medium">{post.author}</span> on
              {" " + post.updated_at}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

function BlogPage() {
  return <BlogShow posts={posts} />;
}

export default BlogPage;
