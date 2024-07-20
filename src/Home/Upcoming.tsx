import Card from "../ui/Card";
import { usePosts } from "./usePosts";
import { PostType } from "./usePosts"; // Import the PostType interface from usePosts
interface PostType {
  id: number;
  created_at: Date;
  name: string;
  location: string;
  image: string;
}

export default function Upcoming() {
  const { error, data: posts } = usePosts();
  console.log("posts", posts);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Check if posts is null or empty array
  if (!posts) {
    return <div>No upcoming visits</div>;
  }

  return (
    <div className="py-5">
      <p className="text-slate-100 text-3xl font-semibold text-start">
        Upcoming Visits
      </p>

      <div className="flex flex-wrap gap-10">
        {posts.data?.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
