import { Component } from '@angular/core';
import { FirstServiceService } from './services/first-service.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-study-mate';

  constructor(firestore: AngularFirestore) {
    firestore.collection('dummy').valueChanges().subscribe(
      result => console.log(result)
    );
  }
}
