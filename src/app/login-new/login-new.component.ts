import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-new',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login-new.component.html',
  styleUrl: './login-new.component.css'
})
export class LoginNewComponent {
  signupUsers: any[]=[];
  signupobj:any={
  username :'' ,
  email:'',
  password :'',
  constructor() {
    this.password = ''; // Initialize it if needed
  }
};

  loginobj:any={
    username:'',
    password:''
  };
  redirectUrl: any='';

  constructor(private auth:AuthService,private router:Router ,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.redirectUrl=this.activatedRoute.snapshot.queryParamMap.get('redirectUrl') || '/';
  }
  onsignup(){
    this.signupUsers.push(this.signupobj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
   
  }
  onLogin() {
  // For simplicity, use a dummy check. In a real app, validate credentials from a backend.
  if (this.loginobj.username === 'admin' && this.loginobj.password === 'admin') {
    this.router.navigate(['/layout']);
  } else {
    alert('Invalid credentials');
  }
}

  loginuser(): void{
    this.auth.login().then(()=>{
      this.router.navigateByUrl('layout');
    })
  }
}

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login-new',
//   templateUrl: './login-new.component.html',
//   styleUrls: ['./login-new.component.css']
// })
// export class LoginNewComponent {
//   loginForm: FormGroup;

//   constructor(private fb: FormBuilder, private router: Router) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }
//   onsignup(){
//       this.signupUsers.push(this.signupobj);
//       localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
//   }
//   onLogin() {
//     if (this.loginForm.valid) {
//       // Assume login is successful
//       this.router.navigate(['layout']);  // Navigate to the dashboard
//     } else {
//       // Handle the form validation errors
//     }
//   }
// }
