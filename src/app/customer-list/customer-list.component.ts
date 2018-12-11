import {Component, OnInit} from '@angular/core';
import {CustomerService, Customer} from '../shared/customer.service';
import {Router} from "@angular/router";
import {Observable} from 'rxjs';
import {AngularFireAuth} from 'angularfire2/auth';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public customers$: Observable<Customer[]>;

  constructor(private customerService: CustomerService,
              private afAuth: AngularFireAuth,
              private router: Router) {
  }


  ngOnInit(): void {
    this.customers$ = this.customerService.getCustomers();
    console.log(this.afAuth.auth.currentUser);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

}
