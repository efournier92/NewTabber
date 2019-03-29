import { firebase, firebaseui } from 'firebaseui-angular';
import { FirebaseOptions } from '@angular/fire';

export const FirebaseAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
};

export const FirebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCZ3SF_hEtcNPw8loFKnoHnVu7IMHzKOOY",
  authDomain: "newtabber-2019.firebaseapp.com",
  databaseURL: "https://newtabber-2019.firebaseio.com",
  projectId: "newtabber-2019",
  storageBucket: "newtabber-2019.appspot.com",
};
