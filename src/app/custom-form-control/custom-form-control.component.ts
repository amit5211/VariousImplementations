import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomFormControlComponent
    }
  ]
})
export class CustomFormControlComponent implements OnInit, ControlValueAccessor {
  formValue = {
    firstName: '',
    lastName: ''
  }
  name: FormGroup;
  constructor(private fb: FormBuilder) {
    this.name = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    this.name.valueChanges.subscribe({
      next: (value: any) => {
        this.onChange({ firstName: this.name.controls.firstName.value, lastName: this.name.controls.lastName.value });
      }
    });
  }

  onChange(obj: any) {
    this.formValue.firstName = obj.firstName;
    this.formValue.lastName = obj.lastName;
  }
  onTouched(value: any) {

  }
  writeValue(obj: any): void {
    if (!!obj) {
      this.formValue = obj;
      console.log(this.formValue)
      this.name.patchValue({
        firstName: this.formValue.firstName,
        lastName: this.formValue.lastName
      });
    }
    else {
      this.formValue = {
        firstName: undefined!,
        lastName: undefined!
      }
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
  }
}
