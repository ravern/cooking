export type Dish = {
  id: string;
  title: string;
  subtitle: string;
  body: any;
  tags: string[];
  images: string[];
  created_at: string;
  updated_at: string;
};

export type Tag = {
  name: string;
};
