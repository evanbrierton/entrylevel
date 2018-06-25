import firebase from 'firebase/app';
import 'firebase/firestore';

export const apiCall = (path) => {
  const ref = path.split('/');
  return new Promise((resolve, reject) => (
    firebase.firestore()
      .collection(ref[0])
      .doc(ref[1])
      .collection(ref[2])
      .doc(ref[3])
      .get()
      .then(res => resolve(console.log(res.data())))
      .catch(err => reject(err))
  ));
};

export default apiCall;
