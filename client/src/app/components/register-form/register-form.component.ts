import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/User"

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
