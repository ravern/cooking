import { useSelect } from "react-supabase";

import type { Tag } from "~/api/models";

export type UseTagsResult = {
  tags?: string[] | null;
};

export default function useTags(): UseTagsResult {
  const [{ data: tags }] = useSelect<Tag>("tags");

  return { tags: tags?.map(({ name }) => name.trim()) };
}
