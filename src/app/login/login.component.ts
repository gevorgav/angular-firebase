import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: {name: string, message: string} = {name: '', message: ''};

  email = '';
  password = '';
  errorMessage = '';

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) { 
      this.afAuth.authState.subscribe(auth=>{
        if(auth){
          this.router.navigate(['/members']);
        }
      })
    }

  ngOnInit() {
  }

  onSignUp(): void {
    if (this.email && this.email.trim() && this.password && this.password.trim()) {
      this.loginEmail(this.email, this.password);
    }
  }

  loginEmail(email: string, password: string){
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        //this.authState = user
        this.router.navigateByUrl('/members');
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

}
