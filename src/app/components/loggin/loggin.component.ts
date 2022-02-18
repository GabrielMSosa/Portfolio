import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/service/loginservice.service';
@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  email: string="";
  password: string="";

  constructor(private UserSer:LoginserviceService) { }

  ngOnInit(): void {
  }

  

  login() {
    const user={email:this.email,password:this.password};
    console.log(this.email);
    console.log(this.password);
    this.UserSer.LoginServi(user).subscribe(data=>{console.log(data);});

  }

}
