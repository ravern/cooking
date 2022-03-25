import { isEmpty } from "lodash";
import { useFilter, useSelect } from "react-supabase";

import type { Dish } from "~/api/models";

export type UseDishesParams = {
  searchQuery: string;
  selectedTags: string[];
};

export type UseDishesResult = {
  dishes?: Dish[] | null;
};

export default function useDishes({
  searchQuery,
  selectedTags,
}: UseDishesParams): UseDishesResult {
  const filter = useFilter(
    (query) => {
      if (!isEmpty(selectedTags)) {
        const tagsOr = selectedTags.map((tag) => `tags.cs.{${tag}}`).join(",");
        query = query.or(tagsOr);
      }

      if (!isEmpty(searchQuery)) {
        query = query.or(
          `title.like.*${searchQuery}*,subtitle.like.*${searchQuery}*`,
        );
      }

      return query.order("title", { ascending: false }).limit(30);
    },
    [searchQuery, selectedTags],
  );

  const [{ data: dishes }] = useSelect<Dish>("dishes", { filter });

  return { dishes };
}
