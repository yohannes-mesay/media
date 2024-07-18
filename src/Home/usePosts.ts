import { useQuery } from "@tanstack/react-query";
import getPosts from "@/services/apiPosts";

interface PostType {
  id: number;
  created_at: Date;
  name: string;
  location: string;
  image: string;
}

export function usePosts() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<{ data: PostType[] | null; error: PostgrestError | null }>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  console.log(posts);
  return { posts, isLoading, error };
}
