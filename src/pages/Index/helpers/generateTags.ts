import type { Dish } from "~/api/models";

export default function generateTags(dishes: Dish[]): string[] {
  const tags = new Set<string>();
  dishes.forEach((dish) => dish.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags);
}
