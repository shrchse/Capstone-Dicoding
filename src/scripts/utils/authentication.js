/* eslint-disable max-len */
import {
  getAuth, createUserWithEmailAndPassword, signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
// import {collection, doc, getFirestore, setDoc} from 'firebase/firestore';

const userAuth = getAuth();
// const db = getFirestore();

const signUp = document.querySelector('#sign-form');
signUp.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const emailSign = signUp['sign-email'].value;
  const password = signUp['sign-pw'].value;
  const name = signUp['sign-name'].value;

  createUserWithEmailAndPassword(userAuth, emailSign, password)
      .then((credential) => {
        updateProfile(userAuth.currentUser, {
          displayName: name,
        });
        Swal.fire({
          title: 'Success',
          icon: 'success',
          text: 'Account Created, Welcome ' + name,
        }).then(() => {
          location.reload();
        });
      }).catch((err) => {
        if (err.code === 'auth/email-already-in-use') {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Email Already In Use',
          });
        }
      });
});

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  evt.stopPropagation();
  const email = loginForm['login-input-email'].value;
  const pword = loginForm['login-input-pw'].value;

  signInWithEmailAndPassword(userAuth, email, pword).then((cred) => {
    loginForm.reset();
    Swal.fire({
      icon: 'success',
      title: 'Logged In',
      text: 'Welcome '+ userAuth.currentUser.displayName,
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      location.reload();
    });
  }).catch((err) => {
    if (err.code === 'auth/wrong-password') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Invalid Email/Password',
      });
    } else if (err.code === 'auth/too-many-requests') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Too Many Request, Try Again Later!',
      });
    } else if (err.code === 'auth/user-not-found') {
      Swal.fire({
        icon: 'warning',
        title: 'Not Found',
        text: 'User Not Found!',
      });
    }
  });
});

const logoutBtn2 = document.querySelector('#logout-btn2');
logoutBtn2.addEventListener('click', (evt) => {
  evt.preventDefault();
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: false,
  });

  const getDisplayName = document.querySelector('.nama-user');

  if (getDisplayName.innerText != 'Guest') {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout',
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(userAuth)
            .then(() => {
              Swal.fire({
                title: 'Logging Out',
                text: 'Operation Complete',
                icon: 'success',
              }).then(() => {
                location.reload();
              });
            });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
            'Cancelled',
            'Operation Cancelled',
            'success',
        );
      }
    });
  } else {
    Swal.fire({
      icon: 'question',
      title: 'You\'re Login as Guest',
    });
  }
});

const logoutBtn = document.querySelector('#logout-btn');
logoutBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: false,
  });

  const getDisplayName = document.querySelector('.nama-user');

  if (getDisplayName.innerText != 'Guest') {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout',
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(userAuth)
            .then(() => {
              Swal.fire({
                title: 'Logging Out',
                text: 'Operation Complete',
                icon: 'success',
              }).then(() => {
                location.reload();
              });
            });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
            'Cancelled',
            'Operation Cancelled',
            'success',
        );
      }
    });
  } else {
    Swal.fire({
      icon: 'question',
      title: 'You\'re Login as Guest',
    });
  }
});

onAuthStateChanged(userAuth, (user) => {
  if (user) {
    const getDisplayName = document.querySelector('.nama-user');
    const getDisplayName2 = document.querySelector('.nama-user-de');

    getDisplayName.innerText = '';
    getDisplayName2.innerText = '';

    getDisplayName.innerText += `${user.displayName}`;
    getDisplayName2.innerText += `${user.displayName}`;
  } else {
    const getDisplayName = document.querySelector('.nama-user');
    const getDisplayName2 = document.querySelector('.nama-user-de');
    getDisplayName.innerText = '';
    getDisplayName2.innerText = '';
    getDisplayName.innerText += 'Guest';
    getDisplayName2.innerText += 'Guest';
  }
});
