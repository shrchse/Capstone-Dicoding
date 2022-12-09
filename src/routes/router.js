import MyPost from '../views/pages/my-post';
import feedPage from '../views/pages/feed-page';

const routes = {
  '/': MyPost,
  '/home': MyPost,
  '/feed': feedPage,
};

export default routes;
