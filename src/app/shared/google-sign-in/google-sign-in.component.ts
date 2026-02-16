import { Component, OnInit, NgZone } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
})
export class GoogleSignInComponent implements OnInit {
  hidden = false;
  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.initializeGoogleSignIn();
  }

  initializeGoogleSignIn() {
    if (window.localStorage.getItem('auth')) {
      this.hidden = true;
    }
    if (this.hidden) {
      return;
    }
    google.accounts.id.initialize({
      client_id:
        '99872720618-35tcbgetjbdo748vh8ak004au2ibm9jr.apps.googleusercontent.com',

      callback: (response: any) => this.handleCredentialResponse(response),
    });

    google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      { theme: 'outline', size: 'large' } // customization attributes
    );
    console.log(google);

    google.accounts.id.prompt(); // also display the One Tap dialog
  }

  handleCredentialResponse(response: any) {
    // response.credential is the JWT token
    console.log('Encoded JWT ID token: ', response.credential);
    window.localStorage.setItem('auth', response.credential);
    // You can decode the JWT token here or send it to your backend for verification
    // For demonstration, we'll just log it

    // If using NgZone, ensure any UI updates are run inside Angular's zone
    this.ngZone.run(() => {
      // Update your application state here, e.g., store user info, navigate, etc.
    });
  }
}
