import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
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
export class AppModule {}

/*
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBUtUbRd-96lr9L3F5RzfrOcHVIhLAIgD8",
    authDomain: "fitness-app-9fc76.firebaseapp.com",
    databaseURL: "https://fitness-app-9fc76-default-rtdb.firebaseio.com",
    projectId: "fitness-app-9fc76",
    storageBucket: "fitness-app-9fc76.appspot.com",
    messagingSenderId: "726377423821",
    appId: "1:726377423821:web:d32365cd90108ee58f1a84"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>

*/