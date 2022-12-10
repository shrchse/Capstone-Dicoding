import {
  getFirestore, collection, getDocs, orderBy, query, where, onSnapshot,
} from 'firebase/firestore';
import {
  createPostTemplateFeed,
} from '../templates/template-factory';

const db = getFirestore();
const collRef = collection(db, 'posts');

const feedPage = {
  async render() {
    return ``;
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
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    // Search For Data
    const searchQuery = document.querySelector('#queries');
    searchQuery.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const searchFor = searchQuery['search'].value;
      window.location.href = '/#/feed/' + searchFor;
      const result = query(collRef, where('location', '==', searchFor));
      container.innerHTML += '';

      onSnapshot(result, (snapshot) => {
        const items = [];
        snapshot.docs.forEach((doc) => {
          items.push({...doc.data(), id: doc.id});
        });
        container.innerHTML = '';
        items.forEach((item) => {
          container.innerHTML += createPostTemplateFeed(item);
        });
      });
    });
  },
};

export default feedPage;
