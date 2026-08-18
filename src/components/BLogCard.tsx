import type { Post } from "@/types/Post";
interface Posts {
  posts: Post[];
}

function BLogCard({ posts }: Posts) {
  return (
    <div className="grid md:grid-cols-3 gap-8 m-8">
      {posts.slice(0, 3).map((post) => (
        <div className="space-y-2">
          <img src={post.image} alt="Blog Post" className="rounded-md" />
          <h3 className="text-md">{post.title}</h3>
          <span className="text-sm font-light">
            by <span className="font-medium">{post.author}</span> on
            {" " + post.updated_at}
          </span>
        </div>
      ))}
    </div>
  );
}

export default BLogCard;
