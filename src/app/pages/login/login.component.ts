import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.email]),
    motDePasse:new FormControl('',[Validators.required,Validators.minLength(4)])
  })
  ngOnInit(): void {
  }


  constructor(){

  }


  login(){
    console.log(this.loginForm.value);
    
  }

}
