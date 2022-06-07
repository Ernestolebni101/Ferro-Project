import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  items: Observable<any[]>;
  constructor(db:AngularFirestore) {
    this.items = db.collection('Products').valueChanges();
   }
  ngOnInit(): void {
  }



}
