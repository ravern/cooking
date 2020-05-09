import find from 'lodash/find';
import intersection from 'lodash/intersection';
import isEmpty from 'lodash/isEmpty';
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
    posts(tags: [String!]): [Post!]!
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
    posts: (_obj, { tags }) => {
      if (!tags) {
        return data
          .filter(post => post.ravernStuff)
          .map(transformPost);
      } else {
        return data
          .map(transformPost)
          .filter(post => !isEmpty(intersection(post.tags, tags)));
      }
    },
    post: (_obj, { id }) => {
      const post = find(data, { id });
      return post ? transformPost(post) : null;
    },
    favouritePosts: () => {
      const allFavouritePosts = data
        .filter(post => post.ravernStuff && post.ravernStuff.favourite)
        .map(transformPost);
      return [null, null, null, null].reduce((posts) => {
        while (true) {
          const post = allFavouritePosts[Math.floor(Math.random() * allFavouritePosts.length)];
          console.log(post);
          if (!find(posts, { id: post.id })) {
            return [...posts, post];
          }
        }
      }, []);
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
