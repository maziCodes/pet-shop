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
  pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  private toastrId: number;


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
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.pattern)])],
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

  fieldValid(fieldName: string, index: number = null) {
    if (index != null) {
      return (
        (!this.form.get('openingHours')['controls'][index].get(fieldName).valid
          && this.form.get('openingHours')['controls'][index].get(fieldName).touched)
      );
    } else {
      return (
        (!this.form.get(fieldName).valid && this.form.get(fieldName).touched)
      );

    }
  }

  displayFieldCss(field: string, index: number = null) {
    return {
      'has-error': this.fieldValid(field, index)
    };
  }

  saveCustomer() {
    this.form.markAllAsTouched();
    this.toastr.clear(this.toastrId)
    if (this.form.invalid) {
      this.toastrId = this.toastr.error(  `Alstublieft, vullen alle verplicht velden`).toastId;
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
    this.toastrId = this.toastr.success('Klant succesvol toegevoegd').toastId
  }

  back() {
    this.location.back();
  }

  ngOnDestroy() {
    this.stop$.next(false);
    this.stop$.complete();
  }
}
