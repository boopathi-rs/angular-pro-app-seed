import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth/auth.service';

@Component ({
    selector: 'register',
    template: `
    <div>
       
        <auth-form (submitted)="registerUser($event)"> 
            <h1>Register</h1>
            <a routerLink="/auth/login">Already have an account?</a>
            <button type="submit">
                Create Account
            </button>
            <div class="error" *ngIf="error">
                {{ error }}
            </div>
        </auth-form>   
    </div>`
})
export class RegisterComponent {
    error: string;
    constructor(
        private authService: AuthService) {}

    async registerUser(event: FormGroup) {
        // const { email, password } : event.value;
        try {            
            // this.authService.createUser(email, password);
            await this.authService.createUser(event.value.email, event.value.password);
        } catch(err) {            
            this.error = err.message;
        }
    }
}
