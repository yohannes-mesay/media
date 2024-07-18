import supabase from "./supabase";

// Define the type for a post
interface PostType {
  id: number;
  created_at: Date;
  name: string;
  location: string;
  image: string;
}

// Fetch function to get posts from Supabase
export default async function getPosts(): Promise<{
  data: PostType[] | null;
  error: PostgrestError | null;
}> {
  const { data, error } = await supabase.from<PostType>("posts").select("*");
  console.log("data", data);
  return { data, error };
}
