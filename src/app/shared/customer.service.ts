import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection
} from 'angularfire2/firestore';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    constructor(private firebase: AngularFirestore) { }

    todoCollectionRef: AngularFirestoreCollection<Customer>;
    customers$: Observable<Customer[]>;

    getCustomers() {
        this.todoCollectionRef = this.firebase.collection<Customer>('customers');
        return this.todoCollectionRef.valueChanges();
    }

    insertCustomer(customer: Customer) {
        // if (customer && customer.name.trim().length) {
            this.todoCollectionRef.add({ name: 'Valod', mobile: '(097) 54-32-98' });
        //   }
    }
}

export interface Customer {
    name: string;
    mobile: string;
}