import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs/operators";
import {Customer} from "../../models/customer";
import {customers} from "../../dummy-data/customers";
import {BehaviorSubject, Observable, of} from "rxjs";

@Component({
  selector: 'app-filter-customers',
  templateUrl: './filter-customers.component.html',
  styleUrls: ['./filter-customers.component.scss']
})
export class FilterCustomersComponent implements OnInit {
  form: FormGroup
  customers: Customer[] = customers();
  filteredCustomers$: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['']
    })

    this.form.controls.name.valueChanges
      .pipe(debounceTime(300))
      .subscribe( v => {
        if (v) {
          this.filteredCustomers$.next(
            customers().filter( c => c.name.includes(v))
          );
        } else {
          this.filteredCustomers$.next([]);
        }
    });
  }

}
