// import { Component } from '@angular/core';

// import { RouterOutlet, Router } from '@angular/router';
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'profile-app-studentname';
//   signupUsers: any[]=[];
//   signupobj:any={
//   username : '',
//   email:'',
//   password : ''};
//   loginobj:any={
//     username:'',
//     password:''
//   };
  
//   ngOnInit(): void {
//     const localData=localStorage.getItem('signupUsers');
//     if(localData!=null){
//       this.signupUsers=JSON.parse(localData);
//     }
//   }
//   onsignup(){
//     this.signupUsers.push(this.signupobj);
//     localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
//     this.signupobj={
//       username : '',
//       email:'',
//       password : ''};
   
//   }
  // onlogin(){
  //   const isUserExist =this.signupUsers.find(m=>m.username==this.loginobj.username && m.password== this.loginobj.password);
  //   if(isUserExist!=undefined){
  //     alert('User login Successfully')
  //   }
  //   else{
  //     alert('Wrong Credentials');
  //   }

  // }
//   onLogin() {
//     // For simplicity, use a dummy check. In a real app, validate credentials from a backend.
//     if (this.loginobj.username === 'admin' && this.loginobj.password === 'admin') {
//       this.router.navigate(['/layout']);
//     } else {
//       alert('Invalid credentials');
//     }
//   }
  
// }


import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile-app-studentname';
  signupUsers: any[] = [];
  signupobj: any = {
    username: '',
    email: '',
    password: ''
  };
  loginobj: any = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onsignup() {
    this.signupUsers.push(this.signupobj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupobj = {
      username: '',
      email: '',
      password: ''
    };
  }

  onLogin() {
    // For simplicity, use a dummy check. In a real app, validate credentials from a backend.
    if (this.loginobj.username === '' && this.loginobj.password === '') {
      this.router.navigate(['/layout']);
    } else {
      alert('Invalid credentials');
    }
  }
}