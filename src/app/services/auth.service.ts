import { Injectable } from '@angular/core';

import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { RouterLink } from '@angular/router';
@Injectable({
  providedIn: 'root',
})



export class AuthService {
  constructor(private auth: Auth) {}

  async register({ email, password }) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      console.log('User registered');
      return userCredential;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  async login({ email, password }) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      return null;
    }
  }

  logout() {
    signOut(this.auth);
   
  }
}
