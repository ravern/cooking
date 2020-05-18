import { ApolloServer, gql } from "apollo-server-micro";
import connect from "connect";
import cors from "cors";
import dotenv from "dotenv";

import resolvers from './_resolvers';

dotenv.config();

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


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = connect();

app.use(cors());
app.use(server.createHandler({ path: "/api" }));

export default app;

export const config = {
  api: {
    bodyParser: false,
  },
};
