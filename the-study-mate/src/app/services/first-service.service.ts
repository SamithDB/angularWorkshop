import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
  geetings = 'FirstServiceService is created!';

  constructor() {
    console.log(this.geetings);
  }

  anotherGreeting() {
    console.log('Greetings again!!');
  }
}
