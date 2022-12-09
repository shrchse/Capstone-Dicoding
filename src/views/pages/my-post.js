/* eslint-disable max-len */
import {
  getFirestore, collection, getDocs, deleteDoc,
  doc, addDoc, orderBy, query, getDoc, updateDoc,
} from 'firebase/firestore';
import {createPostTemplate, formCreate, formCreateEdit} from '../templates/template-factory';

const db = getFirestore();
const collRef = collection(db, 'posts');

const MyPost = {
  async render() {
    return `
        <div id="" class="add-post card text-center">
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
    const qy = query(collRef, orderBy('timestamp', 'desc'));
    const container = document.querySelector('.mid-panel');
    getDocs(qy, collRef)
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
    // edit page
    postContainer.addEventListener('click', (ev) => {
      if (ev.target.id === 'update') {
        const id = ev.target.getAttribute('data-id');
        const docRef = doc(db, 'posts', id);

        getDoc(docRef).then((doc) => {
          const post = doc.data();
          document.getElementById('form-create').innerHTML = '';
          document.getElementById('form-create').innerHTML = formCreateEdit(post);
          const updateForm = document.querySelector('.add');
          updateForm.addEventListener('submit', (e) => {
            e.preventDefault();
            updateDoc(docRef, {
              title: updateForm.title.value,
              description: updateForm.description.value,
              additional: updateForm.additional.value,
              location: updateForm.location.value,
              category: updateForm.category.value,
              timestamp: new Date(),
            }).then(() => {
              updateForm.reset();
              location.reload();
            }).catch((err) => {
              console.log(err.message);
            });
          });
        });
      }
    });

    container.addEventListener('click', (e) => {
      if (e.target.id === 'create-post-btn') {
        document.getElementById('form-create').innerHTML = formCreate();
        document.getElementById('create-post-btn').innerText = `Creating...`;
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
