import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


// third-party modules

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' }
        ]
    }
]

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyCaBs3CmRguAWEGGWhk9PUfCD9frruteZ8",
    authDomain: "fitness-app-93c32.firebaseapp.com",
    databaseURL: "https://fitness-app-93c32-default-rtdb.firebaseio.com",
    projectId: "fitness-app-93c32",
    storageBucket: "fitness-app-93c32.appspot.com",
    messagingSenderId: "379679711229"    
  };

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ],
    declarations: [],
    providers: []
})
export class AuthModule {

}
