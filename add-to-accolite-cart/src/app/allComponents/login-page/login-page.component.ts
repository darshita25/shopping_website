import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  logins:Logins={
    userId: '',
    password: '',
  } 


  constructor(private router:Router){
  }
flag:boolean=false;
 
  clickButton()
  {
    if((this.logins.userId).includes("@accolitedigital.com"))
    {
      this.router.navigate(["/products"]);
      console.log(this.logins.userId);
    }
    else
    this.router.navigate([""]);

    this.flag=true;
  }
}
export interface Logins{
    userId:string;
    password:string;
}