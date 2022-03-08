import { createClient } from "@supabase/supabase-js";

import config from "~/config";

export const client = createClient(config.supabaseUrl, config.supabaseAnonKey);
