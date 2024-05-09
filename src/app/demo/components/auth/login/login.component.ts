import { Component,OnInit } from '@angular/core';
import { LoginRequest } from 'src/app/demo/service/loginRequest';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FormBuilder, Validators,ReactiveFormsModule,FormGroup, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/demo/service/login.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
     templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit {
    loginError:string="";
    loginForm=this.formBuilder.group({
      username:['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
    })
    
    /*loginForm = new FormGroup({
        username: new FormControl('', [Validators.required,Validators.email]),
        password: new FormControl('', [Validators.required])
      });*/

    constructor(private formBuilder:FormBuilder, private router:Router, private loginService: LoginService) { }

    
 
    ngOnInit(): void {
       
    }

    //valCheck: string[] = ['remember'];
    //password!: string;


      get email(){
        return this.loginForm.controls.username;
      }
    
      get password()
      {
        return this.loginForm.controls.password;
      }

    login(){
        console.log("credentials1: " + this.loginForm.controls.username.value )
        if(this.loginForm.valid){
          this.loginError="";
          this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
            next: (userData) => {
              console.log(userData);
            },
            error: (errorData) => {
              console.error(errorData);
              this.loginError=errorData;
            },
            complete: () => {
              console.info("Login completo");
              this.router.navigateByUrl('/dashboard');
              this.loginForm.reset();
            }
          })
    
        }
        else{
          this.loginForm.markAllAsTouched();
          alert("Error al ingresar los datos.");
        }
      }

}
