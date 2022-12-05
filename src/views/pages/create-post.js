const CreatePost = {
  async render() {
    return `<h5> Form Should Go Hear </h5>`;
  },

  async afterRender() {
    const hideRightPanel = document.querySelector('.right-panel');
    hideRightPanel.innerHTML = '';
  },
};

export default CreatePost;

