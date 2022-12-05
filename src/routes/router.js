import CreatePost from '../views/pages/create-post';
import MyPost from '../views/pages/my-post';
import NearbyPost from '../views/pages/nearby-post';

const routes = {
  '/': MyPost,
  '/nearby': NearbyPost,
  '/post': CreatePost,
};

export default routes;
