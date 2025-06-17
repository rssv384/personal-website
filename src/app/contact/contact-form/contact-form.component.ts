import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  providers: [ContactService],
})
export class ContactFormComponent {
  private contactService = inject(ContactService);

  contactForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    message: new FormControl('', { validators: [Validators.required] }),
  });

  // Flag used to show/hide dialog with success or error message after
  // submitting form
  isDialogVisible = signal(false);
  dialogTitle = '';
  dialogMessage = '';

  // Handles contact form submission
  public onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    // Get email data
    const emailData = {
      name: this.contactForm.value.name!,
      email: this.contactForm.value.email!,
      message: this.contactForm.value.message!,
    };

    // Call service to send email
    const res = this.contactService.sendEmail(emailData);
    // console.log(res);
    // If the e-mail was sent successfully
    if (res === 'SUCCESS') {
      this.contactForm.reset(); // Reset form
      this.dialogTitle = 'Thanks for getting in touch!';
      this.dialogMessage = "I'll get back to you as soon as possible.";
    } else {
      this.dialogTitle = 'An error occurred!';
      this.dialogMessage =
        "I'm sorry, there was an error with the form submission and it wasn't possible to send an e-mail.";
    }
    // Trigger dialog visibility
    this.showDialog();
  }

  // Handles success/error message dialog rendering after form submission
  public showDialog() {
    this.isDialogVisible.set(true); // Make visible
    // Hide dialog after 3 seconds
    setTimeout(() => {
      this.isDialogVisible.set(false);
    }, 3000);
  }
}
