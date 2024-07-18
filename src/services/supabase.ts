import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tirscvfeqnykykcduebu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpcnNjdmZlcW55a3lrY2R1ZWJ1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMTI4OTYzNSwiZXhwIjoyMDM2ODY1NjM1fQ.SSL9ypMuXEL5B8oGLZjuPxTh7qqA2mgJ0206N-XJ_BQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
