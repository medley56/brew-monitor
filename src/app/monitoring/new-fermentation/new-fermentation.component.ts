import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-fermentation',
  templateUrl: './new-fermentation.component.html',
  styleUrls: ['./new-fermentation.component.css']
})
export class NewFermentationComponent implements OnInit {
  newBrewForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.newBrewForm = this.formBuilder.group({
      name: ['', Validators.required],
      datasets: this.formBuilder.array([
        this.formBuilder.control([''])
      ])
    });
  }

  onFormSubmit() {
    console.log('form submitted');
  }

}
