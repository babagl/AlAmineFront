import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit{
  validation!: string ;
  errorMessage!: string
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(5)]),
    motDePasse:new FormControl('',[Validators.required,Validators.minLength(4)])
  })
  ngOnInit(): void {
  }


  constructor(private authService: AuthService, private localeService : StorageService,private router:Router){

  }


  login(){
    if(this.loginForm.valid){
      this.authService.authenticate(this.loginForm.value).subscribe((res:any)=>{
        console.log(res);
        this.router.navigate(['/'])
      },err=>{
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
      })
    }else{

    }
    
  }

}
