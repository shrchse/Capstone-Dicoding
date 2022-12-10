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
    const rightPanel = document.querySelector('.right-panel');
    rightPanel.innerHTML = '';
    return ``;
  },

  async afterRender() {
    const rightPanel = document.querySelector('.right-panel');
    rightPanel.innerHTML = '';
    rightPanel.innerHTML += `
    <div class="card" style="width: 100%;">
      <img src="./icons/icon-192x192.png" class="card-img-top" alt="logo">
      <div class="card-body">
        <h5 class="card-title">Countrybute</h5>
        <p class="card-text h-auto">Countrybute is a platform to announce your
        event, so you can gather more people nearby. 
        With us, let's make bigger and better community!</p>
        <a href="#/home" class="btn btn-primary">Manage Your Event</a>
      </div>
    </div>`;

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
    const searchQuery2 = document.querySelector('#queries2');

    searchQuery2.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const searchFor2 = searchQuery2['search2'].value;
      window.location.href = '/#/feed/' + searchFor2;
      const result = query(collRef, where('location', '==', searchFor2));
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
