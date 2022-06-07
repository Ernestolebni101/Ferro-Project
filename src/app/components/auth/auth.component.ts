import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
 
  constructor(private readonly oAuth:AuthService) {
  }

  ngOnInit(): void {
  
  } 
  user = {
    email: '',
    password: ''
  }

  Login():void{
    const {email,password} = this.user;
    this.oAuth.Login(email,password).then(data => console.log("DATOS DE SESION",data));
  }
}