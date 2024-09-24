import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  /*
   Pour l'instant renvoi vers la console mais pourrait être rediriger vers une email
   */
  onSubmit(contactForm : any) {
    if (contactForm.valid) {
      console.log('Form Data: ', contactForm.value);
      alert('Votre message a été envoyé avec succès ! ');
      contactForm.reset();
    } else {
      console.log('Formulaire non valide');
    }
  }

}
