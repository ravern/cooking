import find from 'lodash/find';
import replace from 'lodash/replace';
import map from 'lodash/map';
import lowerCase from 'lodash/lowerCase';
import isEmpty from 'lodash/isEmpty';
import intersection from 'lodash/intersection';

import data from "../../data/iteration-1.json";

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
          .filter(post => !isEmpty(intersection(
            map(post.tags, tag => replace(lowerCase(tag), ' ', '')),
            map(tags, tag => replace(lowerCase(tag), ' ', '')),
          )));
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

export default resolvers;
