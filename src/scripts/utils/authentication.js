/* eslint-disable max-len */
import {
  getAuth, createUserWithEmailAndPassword, signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import {collection, doc, getFirestore, setDoc} from 'firebase/firestore';

const userAuth = getAuth();
const db = getFirestore();

const signUp = document.querySelector('#sign-form');
signUp.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const emailSign = signUp['sign-email'].value;
  const password = signUp['sign-pw']. value;
  const name = signUp['sign-name']. value;

  createUserWithEmailAndPassword(userAuth, emailSign, password)
      .then((credential) => {
        updateProfile(userAuth.currentUser, {
          displayName: name,
        });

        const userRef = collection(db, credential.user.uid);
        const collRef = collection(db, 'posts');
        const dataUser = {
          title: '',
          description: '',
          additional: '',
          location: '',
          category: '',
          timestamp: new Date(),
        };
        setDoc(doc(userRef), dataUser);
        setDoc(doc(collRef), dataUser);
      });
});

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const email = loginForm['login-input-email'].value;
  const pword = loginForm['login-input-pw'].value;

  signInWithEmailAndPassword(userAuth, email, pword).then((cred) => {
    loginForm.reset();
    Swal.fire({
      icon: 'success',
      title: 'Logged In',
      text: 'Login Success, Welcome ' + userAuth.currentUser.uid,
    });
  }).catch((err) => {
    console.log(err.message);
  });
});

const logoutBtn = document.querySelector('#logout-btn');
logoutBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  signOut(userAuth).then(() => {
  }).catch((err) => {
    console.log(err.message);
  });
});

onAuthStateChanged(userAuth, (user) => {
  if (user) {
    const getDisplayName = document.querySelector('.nama-user');
    getDisplayName.innerText += `${user.displayName}`;
    console.log('user logged in : ', user.displayName);
  } else {
    console.log('Logged Out');
  }
});
