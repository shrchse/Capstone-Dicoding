import MyPost from '../views/pages/my-post';
import feedPage from '../views/pages/feed-page';
import Like from '../views/pages/like';


const routes = {
  '/': MyPost,
  '/feed': feedPage,
  '/like': Like,
};

export default routes;
