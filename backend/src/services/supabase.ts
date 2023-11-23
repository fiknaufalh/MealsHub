import { createClient } from "@supabase/supabase-js";
import { Database } from "./schema";

const supabaseUrl: string = "https://jsmobwplkltuacyyfemf.supabase.co";
const supabaseKey: string = process.env.SUPABASE_KEY || "";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
