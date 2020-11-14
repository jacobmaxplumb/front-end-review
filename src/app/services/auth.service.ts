import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private authEndpoint: string = 'https://localhost:5001/api';

    constructor(private http: HttpClient) {}

    public logInUser(email: string, password: string) {
        return this.http.post(`${this.authEndpoint}/Auth/SignIn`, {email, password}, {responseType: 'text'}).pipe(
            tap(token => console.log(token))
        );
    }
}