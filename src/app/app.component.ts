import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from './shared/customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{

  constructor(private custemerService: CustomerService) { }

  ngOnInit(): void {
  }

  title = 'Firebase test project';

  add(){
    this.custemerService.insertCustomer(null);
  }
}
