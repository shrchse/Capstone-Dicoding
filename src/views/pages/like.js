import FavoriteFeedIdb from '../data/favorite-feed-idb';
import {createPostTemplateFeed} from '../views/templates/template-factory';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Feeds</h2>
        <div id="feeds" class="feeds">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const likeButtonContainer = await FavoriteFeedIdb.getAllFeeds();
    const container = document.querySelector('#feeds');

    posts.forEach((post) => {
      container.innerHTML += createPostTemplateFeed(post);
      likeButtonContainer.innerHTML = createLikeButtonTemplate();
    });
  },
};

export default Like;
