import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Injectable()
export class ContactService {
  constructor() {}

  // Handles sending an e-mail to notify of a submission of the contact form
  sendEmail(emailData: {
    name: string;
    email: string;
    message: string;
  }): string {
    console.log(emailData);
    let response = '';
    // Send e-mail through EmaiJS API service
    emailjs
      .send(
        environment.EMAIL_SERVICE_ID,
        environment.EMAIL_TEMPLATE_ID,
        emailData,
        {
          publicKey: environment.EMAIL_SERVICE_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          // console.log('E-mail sent succesfully!');
          return 'SUCCESS';
        },
        (error) => {
          // console.log(
          //   'Failed to send e-mail...',
          //   (error as EmailJSResponseStatus).text,
          // );
          response = 'ERROR';
        },
      );
    // return response
    return response;
  }
}
