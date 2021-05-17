import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss']
})
export class FieldErrorComponent implements OnInit {
  @Input() errorMessage: string = "Dit veld is verplicht";
  @Input() hasError: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
