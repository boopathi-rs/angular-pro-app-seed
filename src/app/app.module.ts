import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

/*
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCaBs3CmRguAWEGGWhk9PUfCD9frruteZ8",
    authDomain: "fitness-app-93c32.firebaseapp.com",
    databaseURL: "https://fitness-app-93c32-default-rtdb.firebaseio.com",
    projectId: "fitness-app-93c32",
    storageBucket: "fitness-app-93c32.appspot.com",
    messagingSenderId: "379679711229",
    appId: "1:379679711229:web:97fa6c1691c36aa1a24394"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>

*/
