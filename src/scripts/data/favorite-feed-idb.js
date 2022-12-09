import {openDB} from 'idb';
import firebaseConfig from '../global/config';

const {DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME} = firebaseConfig;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {keyPath: 'id'});
  },
});

const FavoriteFeedIdb = {
  async getFeed(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllFeeds() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putFeed(feed) {
    return (await dbPromise).put(OBJECT_STORE_NAME, feed);
  },
  async deleteFeed(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteFeedIdb;
