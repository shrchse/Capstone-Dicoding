import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCANL7i5K7Gb5GWQDDRVWEBenLcOcENtIQ',
  authDomain: 'dicoding-countrybute.firebaseapp.com',
  projectId: 'dicoding-countrybute',
  storageBucket: 'dicoding-countrybute.appspot.com',
  messagingSenderId: '853459631529',
  appId: '1:853459631529:web:068d2de885218ddd9dd8b8',
  measurementId: 'G-TW07DPFPJ4',
  CACHE_NAME: 'FeedCache-V2',
  DATABASE_NAME: 'feeds-countrybute-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'feeds',
};

initializeApp(firebaseConfig);

export default firebaseConfig;
