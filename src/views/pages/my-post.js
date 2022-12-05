/* eslint-disable max-len */
import {
  getFirestore, collection, getDocs, deleteDoc, doc, addDoc,
} from 'firebase/firestore';
import {createPostTemplate} from '../templates/template-factory';

const db = getFirestore();
const collRef = collection(db, 'posts');

const MyPost = {
  async render() {
    return `
        <div class="add-post card text-center">
        <div class="card-body">
          <h5 class="card-title">Your Homepage</h5>
          <p class="card-text">Create and Share your Event to Community</p>
          <a class="btn btn-primary" id="create-post-btn">Create Post</a>
        </div>
        <div id="form-create"> </div>
      </div>
    `;
  },

  async afterRender() {
    const container = document.querySelector('.mid-panel');
    getDocs(collRef)
        .then((snapshot) => {
          const posts = [];
          snapshot.docs.forEach((doc) => {
            posts.push({...doc.data(), id: doc.id});
          });
          posts.forEach((post) => {
            container.innerHTML += createPostTemplate(post);
          });
        })
        .catch((error) => {
          console.log(error.message);
        });

    const postContainer = document.querySelector('.mid-panel');
    postContainer.addEventListener('click', (e) => {
      if (e.target.id === 'delete') {
        const dialogBox = confirm('Do you want to delete this Post?');
        if (dialogBox) {
          const id = e.target.getAttribute('data-id');
          const ref = doc(db, 'posts', id);
          deleteDoc(ref)
              .then(() => {
                location.reload();
              });
        } else {
          alert('dibatalkan');
        }
      }
    });

    postContainer.addEventListener('click', (ev) => {
      if (ev.target.id === 'update') {
        const id = ev.target.getAttribute('data-id');
        const thisss = document.querySelector('#p-title');
        console.log(id, thisss.outerText);
      }
    });

    container.addEventListener('click', (e) => {
      if (e.target.id === 'create-post-btn') {
        document.getElementById('form-create').innerHTML = `
        <div class="card form-card">
          <form class="add">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" name="title" placeholder="Title">
              <label for="floatingInput">Title</label>
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea class="form-control" id="description" name="description" rows="3"></textarea>
            </div>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="additional" name="additional" placeholder="Additional Link">
              <label for="floatingInput">Additional Link</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="location" name="location" placeholder="Location">
              <label for="floatingInput">Location</label>
            </div>
            <select class="form-select" id="category" name="category">
              <option selected>Category</option>
              <option value="Community Event">Community Event</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Campaign">Campaign</option>
              <option value="Other">Other</option>
            </select>
            <button class="btn btn-success" id="submit">Submit</button>
          </form>
        </div>
        <div id="btn-target"></div>`;

        document.getElementById('create-post-btn').innerText = `Creating...`;
        document.getElementById('btn-target').innerHTML = `
        <a class="btn btn-danger" id="close">Close</a>`;
        // add post
        const form = document.querySelector('.add');
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          addDoc(collRef, {
            title: form.title.value,
            description: form.description.value,
            additional: form.additional.value,
            location: form.location.value,
            category: form.category.value,
            timestamp: new Date(),
          }).then(() => {
            form.reset();
            location.reload();
          });
        });
      }
      if (e.target.id === 'close') {
        document.getElementById('create-post-btn').innerText = `Create Post`;
        document.getElementById('form-create').innerHTML = ``;
      }
    });
  },
};

export default MyPost;
