import {Component, OnInit, HostBinding} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: { name: string, message: string } = {name: '', message: ''};

  email = '';
  password = '';
  errorMessage = '';

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  ngOnInit() {
  }

  onSignUp(): void {
    if (this.email && this.email.trim() && this.password && this.password.trim()) {
      this.loginEmail(this.email, this.password);
    }
  }

  loginGoogle() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
            resolve(res);
          },
          err => {
            console.log(err);
            reject(err);
          });
    });
  }

  loginEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((success) => {
        this.router.navigateByUrl('/members');
      })
      .catch(error => {
        this.error = error;
      });
  }

}
