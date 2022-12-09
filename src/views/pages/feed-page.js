import {
  getFirestore, collection, getDocs, orderBy, query,
} from 'firebase/firestore';
import {
  createPostTemplateFeed, createLikeButtonTemplate,
} from '../templates/template-factory';

const db = getFirestore();
const collRef = collection(db, 'posts');

const feedPage = {
  async render() {
    return `<div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const qy = query(collRef, orderBy('timestamp', 'desc'));
    const container = document.querySelector('.mid-panel');
    getDocs(qy, collRef)
        .then((snapshot) => {
          const posts = [];
          snapshot.docs.forEach((doc) => {
            posts.push({...doc.data(), id: doc.id});
          });
          posts.forEach((post) => {
            container.innerHTML += createPostTemplateFeed(post);
            likeButtonContainer.innerHTML = createLikeButtonTemplate();
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
  },
};

export default feedPage;
