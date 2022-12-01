import MyPost from '../views/pages/my-post';
import NearbyPost from '../views/pages/nearby-post';
import PopularPost from '../views/pages/popular-post';

const routes = {
  '/': MyPost,
  '/nearby': NearbyPost,
  '/popular': PopularPost,
};

export default routes;
