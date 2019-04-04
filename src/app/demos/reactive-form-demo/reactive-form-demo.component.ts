import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent implements OnInit {
  createUserForm: FormGroup;
  showResults = false;

  static passwordMatchValidator(AC: AbstractControl): {[key: string]: boolean} {
    const password = AC.get('newPassword').value; // to get value in input tag
    const confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
    if (password !== confirmPassword) {
      // AC.get('confirmPassword').setErrors( {passwordMatchValidator: true} );
      return {matchPassword: true};
    } else {
      return null;
    }
  }

  constructor() { }

  ngOnInit() {
    this.createUserForm = new FormGroup({
      userData: new FormGroup({
        firstName: new FormControl(null, [Validators.required]),
        lastName: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      position: new FormControl(null),
      salary: new FormControl(null),
      passwords: new FormGroup({
        newPassword: new FormControl(null, [Validators.required]),
        confirmPassword: new FormControl(null, [Validators.required]),
      }, ReactiveFormDemoComponent.passwordMatchValidator)
    });
  }

  onSubmit() {
    console.log(this.createUserForm);
    this.showResults = true;
  }

  onReset() {
    this.createUserForm.reset();
    this.showResults = false;
  }


}
