import { useQuery } from "@tanstack/react-query";
import getPosts from "@/services/apiPosts";
import { PostgrestError } from "@supabase/postgrest-js"; // Assuming you're using Supabase
interface PostType {
  id: number;
  created_at: Date;
  name: string;
  location: string;
  image: string;
}

export function usePosts() {
  const { data, isLoading, error } = useQuery<{
    data: PostType[] | null;
    error: PostgrestError | null;
  }>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return { data, isLoading, error };
}
