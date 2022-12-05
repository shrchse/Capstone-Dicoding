/* eslint-disable no-unused-vars */
import {
  getFirestore, collection, getDocs, onSnapshot,
} from 'firebase/firestore';

const db = getFirestore();
const collRef = collection(db, 'posts');


// getDocs(collRef)
//     .then((snapshot) => {
//       const posts = [];
//       snapshot.docs.forEach((doc) => {
//         posts.push({...doc.data(), id: doc.id});
//       });
//       return posts;
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });

// onSnapshot(collRef, (snapshot) => {
//   const posts = [];
//   snapshot.docs.forEach((doc) => {
//     posts.push({...doc.data(), id: doc.id});
//   });
//   posts.forEach((post) => {
//     container.innerHTML += createPostTemplate(post);
//   });
// });

export {db, collection, getDocs};
