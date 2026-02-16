import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoogleSignInComponent } from './shared/google-sign-in/google-sign-in.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GoogleSignInComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
