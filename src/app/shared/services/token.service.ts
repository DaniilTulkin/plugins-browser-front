import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  storage: Storage = window.localStorage;

  constructor() { }

  clearStorage(): void {
    this.storage.clear();
  }

  saveToken(token: string): void {
    this.storage.removeItem(TOKEN_KEY);
    this.storage.setItem(TOKEN_KEY, token);
  }

  getToken(): string | null {
    return this.storage.getItem(TOKEN_KEY);
  }

  saveUser(user: any): void {
    this.storage.removeItem(USER_KEY);
    this.storage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser(): any {
    const user = this.storage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}
