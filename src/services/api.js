import axios from 'axios';
import FireStoreParser from 'firestore-parser';

import firebase from '../firebase';

export const database = (method, path, body) => (
  new Promise((resolve, reject) => (
    axios[method](
      `https://firestore.googleapis.com/v1beta1/projects/entrylevel-ie/databases/(default)/documents/${path}`,
      body,
    )
      .then(({ data: { fields } }) => resolve(FireStoreParser(fields)))
      .catch(({ response: { data: { error } } }) => reject(error))
  ))
);

export const storage = (bucket, path) => (
  new Promise((resolve, reject) => (
    firebase.app().storage(`gs://entrylevel-${bucket}`).ref().child(path)
      .getDownloadURL()
      .then(url => resolve(url))
      .catch(({ response: { data: { error } } }) => reject(error))
  ))
);

export const geocode = address => (
  new Promise((resolve, reject) => (
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`)
      .then(({ data: { results: [results] } }) => resolve(results.geometry.location))
      .catch(({ response: { data: { error } } }) => reject(error))
  ))
);
