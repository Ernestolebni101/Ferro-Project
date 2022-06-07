import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AngularFirestore} from "@angular/fire/compat/firestore"

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  form:FormGroup = new FormGroup({
    Name: new FormControl(''),
    Description: new FormControl(''),
    Price: new FormControl(''),
    Size: new FormControl(''),
    ImageUrl: new FormControl('')
  });

  formData:FormData = new FormData();
  constructor(private readonly db:AngularFirestore) { }

  ngOnInit(): void {
  }

  submit(){
    if (this.form.value){
      this.formData.append('Name', this.form.value.Name);
      this.formData.append('Description', this.form.value.Description);
      this.formData.append('Price', `C$ ${this.form.value.Price}`);
      this.formData.append('Size', this.form.value.Size);
    }

  }

  onChange(event:any){
    let reader:FileReader = new FileReader();

    if (event.target.fils && event.target.length){
      this.formData.append('ImageUrl', event.targe.files[0]);
    }
  }
}
