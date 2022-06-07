import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private readonly oAuth:AuthService,
              private readonly router:Router) {}

  ngOnInit(): void {

  }
  user = {
    email: '',
    password: ''
  }

  Login():void{
    const {email,password} = this.user;
    this.oAuth.Login(email,password)
        .then((data) => {
          console.log(data);
          this.router.navigate(['admin']);
        }).catch((e) => {
          console.error(e)
        });
  }
}
