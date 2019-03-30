import { firebase, firebaseui } from 'firebaseui-angular';
import { FirebaseOptions } from '@angular/fire';

export class FireConfig {
  public static firebase: FirebaseOptions = {
    apiKey: "AIzaSyCZ3SF_hEtcNPw8loFKnoHnVu7IMHzKOOY",
    authDomain: "newtabber-2019.firebaseapp.com",
    databaseURL: "https://newtabber-2019.firebaseio.com",
    projectId: "newtabber-2019",
    storageBucket: "newtabber-2019.appspot.com",
  };

  public static auth: firebaseui.auth.Config = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      {
        scopes: [
          'public_profile',
          'email',
          'user_likes',
          'user_friends'
        ],
        customParameters: {
          'auth_type': 'reauthenticate'
        },
        provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
      },
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      {
        requireDisplayName: false,
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
      },
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
  };
}
