/* eslint-disable max-len */
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {
  getFirestore, collection, getDocs, deleteDoc,
  doc, addDoc, orderBy, query, getDoc, updateDoc, setDoc,
} from 'firebase/firestore';
import {createPostTemplate, formCreate, formCreateEdit} from '../templates/template-factory';

const db = getFirestore();
const userDb = getAuth();

const MyPost = {
  async render() {
    return `
        <div id="formRef" class="add-post card text-center full-widht">
        <div class="card-body full-widht">
          <h5 class="card-title">Your Homepage</h5>
          <p class="card-text">Create and Share your Event to Community</p>
          <a class="btn btn-primary" id="create-post-btn">Create Post</a>
        </div>
        <div id="form-create"> </div>
      </div>
    `;
  },

  async afterRender() {
    onAuthStateChanged(userDb, (user) => {
      if (user) {
        const collRef = collection(db, userDb.currentUser.uid);
        const feedRef = collection(db, 'posts');
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
        // delete post
        const postContainer = document.querySelector('.mid-panel');
        postContainer.addEventListener('click', (e) => {
          if (e.target.id === 'delete') {
            Swal.fire({
              title: 'Are you sure?',
              text: 'You won\'t be able to revert this!',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!',
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: 'Deleted!',
                  text: 'Your post has been deleted.',
                  confirmButtonText: 'success'}).then(() => {
                  const id = e.target.getAttribute('data-id');
                  const ref = doc(db, userDb.currentUser.uid, id);
                  const feedRef = doc(db, 'posts', id);
                  deleteDoc(ref)
                      .then(() => {
                        deleteDoc(feedRef);
                        location.reload();
                      }).catch((err) => {
                        console.log(err.message);
                      });
                });
              }
            });
          }
        });

        const noRightMenu = document.querySelector('.right-panel');
        noRightMenu.innerHTML = '';
        // edit page
        postContainer.addEventListener('click', (ev) => {
          if (ev.target.id === 'update') {
            const id = ev.target.getAttribute('data-id');
            const docRef = doc(db, userDb.currentUser.uid, id);
            const feedRef = doc(db, 'posts', id);

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
                  updateDoc(feedRef, {
                    title: updateForm.title.value,
                    description: updateForm.description.value,
                    additional: updateForm.additional.value,
                    location: updateForm.location.value,
                    category: updateForm.category.value,
                    timestamp: new Date(),
                  });
                  Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Your post has been created!',
                  });
                }).then(() => {
                  location.reload();
                });
              });
            });
          }
        });

        container.addEventListener('click', (e) => {
          if (e.target.id === 'create-post-btn') {
            document.getElementById('form-create').innerHTML = formCreate();
            document.getElementById('create-post-btn').innerText = `Creating...`;
            // create post
            const form = document.querySelector('.add');
            form.addEventListener('submit', (e) => {
              e.preventDefault();
              addDoc(collRef, {
                author: user.displayName,
                title: form.title.value,
                description: form.description.value,
                additional: form.additional.value,
                location: form.location.value,
                category: form.category.value,
                timestamp: new Date(),
              }).then((docRef) => {
                setDoc(doc(feedRef, docRef.id), {
                  author: user.displayName,
                  title: form.title.value,
                  description: form.description.value,
                  additional: form.additional.value,
                  location: form.location.value,
                  category: form.category.value,
                  timestamp: new Date(),
                });
                Swal.fire({
                  icon: 'success',
                  title: 'Success',
                  text: 'Your post has been created!',
                }).then(() => {
                  location.reload();
                });
              });
            });
          }
          if (e.target.id === 'close') {
            document.getElementById('create-post-btn').innerText = `Create Post`;
            document.getElementById('form-create').innerHTML = ``;
          }
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Not Sign-In',
          text: 'Login or Sign-Up to Access',
          footer: 'Returning to main page...',
        }).then(() => {
          window.location.href = '#/feed';
        });
      }
    });
  },
};

export default MyPost;
