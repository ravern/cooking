export type UserCredentials = {
  instagram?: { token: string };
};

export type User = {
  id: string;
  username: string;
  password: string;
  credentials: UserCredentials;
  created_at: Date;
  updated_at?: Date;
};

export type Dish = {
  id: string;
  user_id: string;
  name: string;
  pictures: string[];
  body: string;
  created_at: Date;
  updated_at?: Date;
};

export type Recipe = {
  id: string;
  user_id: string;
  dish_id: string;
  body: string;
  created_at: Date;
  updated_at?: Date;
};
