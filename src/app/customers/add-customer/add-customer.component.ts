import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DayOfWeek} from "../../models/dayOfWeek";
import {Subject} from "rxjs";
import {SideBarComponent} from "../../layout/side-bar/side-bar.component";
import {Location} from "@angular/common";
import {PageManagerService} from "../../services/page-manager.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit, OnDestroy {
  form: FormGroup;

  openingHoursForm: FormArray;
  daysAndTime: Array<DayOfWeek> = [
    {dayOfWeek: 'Ma', startTime: '', endTime: ''},
    {dayOfWeek: 'Di', startTime: '', endTime: ''},
    {dayOfWeek: 'Wo', startTime: '', endTime: '',},
    {dayOfWeek: 'Do', startTime: '', endTime: '',},
    {dayOfWeek: 'Vrij', startTime: '', endTime: ''},
    {dayOfWeek: 'Za', startTime: '', endTime: '',},
    {dayOfWeek: 'Zo', startTime: '', endTime: '',},
  ];
  stop$ = new Subject();


  constructor(
    private fb: FormBuilder,
    private location: Location,
    private pageManagerService: PageManagerService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {
    this.pageManagerService.title = 'infofiche Klant';
    this.openingHoursForm = new FormArray([]);
    this.buildOpeningHoursForm();

    this.form = this.fb.group({
      name: ['', Validators.required],
      addressOne: ['', Validators.required],
      addressTwo: ['', Validators.required],
      postCode: ['', Validators.required],
      tel: [''],
      email: ['', Validators.required],
      openingHours: this.openingHoursForm
    });
  }

  buildOpeningHoursForm() {

    this.daysAndTime.forEach( (d, i) => {
      const form = new FormGroup({});
      form.addControl('startTime', new FormControl('', Validators.required));
      this.openingHoursForm.push(form);
    });
  }

  saveCustomer() {
    console.log(this.form)
    if (this.form.invalid) {
      this.toastr.error(  `Alstublieft, vullen alle verplicht velden gemarkeerd met *`)
      return;
    }
    const newCustomer = this.form.value;

    newCustomer.openingHours.forEach( v => {
      let date = new Date();
      let time = v.startTime.split(':');
      date.setHours(time[0], time[1]);
      v.startTime = date.toString();
    })

    const saveCustomer = [...this.pageManagerService.customers$.getValue(), newCustomer];
    this.pageManagerService.setCustomer(saveCustomer)
    this.pageManagerService.customers$.next(saveCustomer);
    this.form.reset();
    this.toastr.success('Klant succesvol toegevoegd')
  }

  back() {
    this.location.back();
  }

  ngOnDestroy() {
    this.stop$.next(false);
    this.stop$.complete();
  }
}
