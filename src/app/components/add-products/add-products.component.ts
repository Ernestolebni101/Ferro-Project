import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {AngularFirestore} from "@angular/fire/compat/firestore"

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  form:FormGroup = new FormGroup({});
  constructor(private readonly db:AngularFirestore) { }

  ngOnInit(): void {
  }

  submit(){
    
  }
}
