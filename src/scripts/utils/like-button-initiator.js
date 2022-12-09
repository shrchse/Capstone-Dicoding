/* eslint-disable max-len */
import FavoriteFeedIdb from '../data/favorite-feed-idb';
import {createLikeButtonTemplate, createLikedButtonTemplate} from '../views/templates/template-factory';

const LikeButtonInitiator = {
  async init({likeButtonContainer, feed}) {
    this._likeButtonContainer = likeButtonContainer;
    this._feed = feed;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._feed;

    if (await this._isFeedExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isFeedExist(id) {
    const feed = await FavoriteFeedIdb.getFeed(id);
    return !!feed;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteFeedIdb.putFeed(this._feed);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteFeedIdb.deleteFeed(this._feed.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
