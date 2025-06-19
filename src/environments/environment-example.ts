// How to setup env to work with EmailJS service to be able to send the contact
// form data as an e-mail

export const environment = {
  // production: true or false,
  EMAIL_SERVICE_ID: 'YOUR_SERVICE_ID', // EmailJS service ID
  EMAIL_TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // EmailJS e-mail template
  EMAIL_SERVICE_PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // EmailJS public API key
  // Your web app's Firebase configuration (Provided by Firebase when adding
  // it to your web app)
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  FIREBASE_CONFIG: {
    apiKey: 'YOUR_FIREBASE_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
    measurementId: 'YOUR_MEASUREMENT_ID',
  },
};
