import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  products:Observable<any>;
  constructor(private readonly db:AngularFirestore) {
    this.products = this.db.collection('Products').valueChanges();

  }

  ngOnInit(): void {
    this.products.forEach(a => console.log(a))
  }

}
