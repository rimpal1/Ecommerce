import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() public childEvent = new EventEmitter();
  constructor() { }
  // LoginOrSignUp(): void {
  //   this._route.navigate(['/Login']);
  // }

  ngOnInit() {

  }

}
