import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  contactForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    message: new FormControl('', { validators: [Validators.required] }),
  });

  // Handles contact form submission
  public onSubmit() {
    if (this.contactForm.invalid) {
      console.log('INVALID FORM');
      return;
    }
    console.log(this.contactForm);
  }

  // Handles form resetting
  onReset() {
    this.contactForm.reset();
  }
}
