import { isEmpty } from "lodash";
import { useCallback, useState } from "react";
import { useFilter, useSelect } from "react-supabase";

import type { Dish } from "~/api/models";

export type UseDishesParams = {
  searchQuery: string;
  selectedTags: string[];
};

export type UseDishesResult = {
  dishes?: Dish[] | null;
  fetching: boolean;
  fetchMore: () => void;
};

export default function useDishes({
  searchQuery,
  selectedTags,
}: UseDishesParams): UseDishesResult {
  const [limit, setLimit] = useState(30);

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

      return query.order("title", { ascending: false }).range(0, limit);
    },
    [searchQuery, selectedTags, limit],
  );

  const [{ data: dishes, fetching }] = useSelect<Dish>("dishes", { filter });

  const fetchMore = useCallback(() => {
    setLimit((limit) => limit + 30);
  }, [setLimit]);

  return { dishes, fetching, fetchMore };
}
