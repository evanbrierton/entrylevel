import axios from 'axios';

export const database = (method, path, body) => (
  new Promise((resolve, reject) => (
    axios[method](
      `https://firestore.googleapis.com/v1beta1/projects/entrylevel-ie/databases/(default)/documents/${path}`,
      body,
    )
      .then(({ data: { fields } }) => resolve(Object.assign(
        {},
        ...Object.entries(fields).map(field => ({ [field[0]]: Object.values(field[1])[0] })),
      )))
      .catch(err => reject(err))
  ))
);

export const geocode = address => (
  new Promise((resolve, reject) => (
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`)
      .then(({ data: { results: [results] } }) => resolve(results.geometry.location))
      .catch(err => reject(err))
  ))
);
