import Card from "../ui/Card";
import { usePosts } from "./usePosts";
interface PostType {
  id: Number;
  created_at: Date;
  name: String;
  location: String;
  image: String;
}
export default function Upcoming() {
  const { error, posts } = usePosts();
  console.log("post", posts);
  return (
    <div className="py-5">
      <p className="text-slate-100 text-3xl font-semibold text-start">
        Upcoming Visits
      </p>

      <div className="flex flex-wrap gap-10">
        {posts.map((post) => (
          <Card post={post} />
        ))}
      </div>
    </div>
  );
}
