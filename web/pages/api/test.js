import admin from "firebase-admin";
import dotenv from "dotenv";
import differenceBy from 'lodash/differenceBy';

import firebase from "./_firebase";
import data from "../../data/iteration-1.json";

dotenv.config();
firebase.config();

const database = admin.firestore();

export default async function test(req, res) {
  const existingPosts = [];

  const snapshot = await database.collection("posts").get();
  snapshot.forEach(doc => {
    existingPosts.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  const posts = data.map(transformPost);

  const newPosts = differenceBy(posts, existingPosts, 'legacyID');

  await Promise.all(newPosts.map(post => database.collection("posts").add(post)));

  res.json(newPosts);
}

function transformPost(post) {
  return {
    ...post.ravernStuff,
    legacyID: post.id,
    images: post.urls,
  };
}
