import { nanoid } from "nanoid";

import config from "~/config";

import type { SupabaseClient } from "@supabase/supabase-js";

export default async function uploadFile(
  supabase: SupabaseClient,
  file: File,
): Promise<string> {
  const fileExtension = file.name.split(".").pop();

  const { data, error } = await supabase.storage
    .from("cooking")
    .upload(`${nanoid()}.${fileExtension}`, file);

  if (error != null) {
    throw error;
  }

  if (data == null) {
    throw new Error("No data returned from server");
  }

  return `${config.supabaseUrl}/storage/v1/object/public/${data.Key}`;
}
