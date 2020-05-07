import find from 'lodash/find';
import { ApolloServer, gql } from "apollo-server-micro";
import connect from "connect";
import cors from "cors";

import data from "../../data/iteration-1.json";

export const config = {
  api: {
    bodyParser: false,
  },
};

const typeDefs = gql`
  type Query {
    posts: [Post!]!
    post(id: ID): Post
    favouritePosts: [Post!]!
  }

  type Post {
    id: ID!
    name: String!
    description: String!
    images: [String!]!
    tags: [String!]!
    favourite: Boolean!
  }
`;

const resolvers = {
  Query: {
    posts: () => {
      return data
        .filter(post => post.ravernStuff)
        .map(transformPost);
    },
    post: (_obj, { id }) => {
      const post = find(data, { id });
      return post ? transformPost(post) : null;
    },
    favouritePosts: () => {
      const allFavouritePosts = data
        .filter(post => post.ravernStuff && post.ravernStuff.favourite)
        .map(transformPost);
      const firstPost = allFavouritePosts[Math.floor(Math.random() * allFavouritePosts.length)];
      const secondPost = allFavouritePosts[Math.floor(Math.random() * allFavouritePosts.length)];
      const thirdPost = allFavouritePosts[Math.floor(Math.random() * allFavouritePosts.length)];
      return [firstPost, secondPost, thirdPost];
    }
  }
};

function transformPost(post) {
  return {
    ...post.ravernStuff,
    id: post.id,
    images: post.urls,
  };
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = connect();

app.use(cors());
app.use(server.createHandler({ path: "/api" }));

export default app;
