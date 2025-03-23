import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../shared/models/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LOGIN_POST_URL} from "../../../assets/routes.constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }




  public signIn(email: string, password: string) {

    /**
    const tempUser: User = {id: 1, username: 'usernameTemp', password: 'passwordTemp', firstName: 'firstNameTemp', lastName: 'lastNameTemp', token: 'TOKEN'}
    localStorage.setItem('currentUser', JSON.stringify(tempUser));
    this.currentUserSubject.next(tempUser);
     */

    return this.http.post(LOGIN_POST_URL, {
      first_name: "Mhd",
      last_name: "Alk",
      email: email,
      password: password,
      password_confirmation: password
    }, this.httpOptions)
  }

  public signUp(email: string, password: string) {
    const tempUser: User = {id: 1, username: 'usernameTemp', password: 'passwordTemp', firstName: 'firstNameTemp', lastName: 'lastNameTemp', token: 'TOKEN'}
    localStorage.setItem('currentUser', JSON.stringify(tempUser));
    this.currentUserSubject.next(tempUser);
  }

  public signOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next({id: 0, username: '', password: '', firstName: '', lastName: '', token: ''});
  }



}



