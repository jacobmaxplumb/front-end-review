import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state';
import { AppPageActions } from '../state/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  public login() {
    this.store.dispatch(AppPageActions.logInSubmitted({email: this.email, password: this.password}));
  }

}
