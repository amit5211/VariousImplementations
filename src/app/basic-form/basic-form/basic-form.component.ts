import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    let name = { firstName: "Amit", lastName: "Dash" };
    this.form.controls.name.patchValue(name);
    this.form.valueChanges.subscribe(res=>{
      console.log(res)
    })
  }

}
