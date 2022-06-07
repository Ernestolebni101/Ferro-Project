import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  image:any;
  form:FormGroup = new FormGroup({
    Name: new FormControl(''),
    Description: new FormControl(''),
    Price: new FormControl(''),
    Size: new FormControl(''),
    ImageUrl: new FormControl('')
  });

  formData:FormData = new FormData();
  constructor(private readonly db:AngularFirestore,
              private readonly storage:AngularFireStorage,
              private router:Router) { }

  ngOnInit(): void {
  }

  async submit(){
    if (this.form.value){
      this.storage.upload("path_name", this.image).then(rst => {
        rst.ref.getDownloadURL().then(url => {
          console.log(url);
          this.form.value.ImageUrl = url;
        })
      })
      // let jsonContent = JSON.stringify(this.formData)
      console.log("OBJETO");
      console.log(this.form.value);
      console.log("FILE");
      console.log(this.image);

      await this.db.collection('Products').add(this.form.value);

      this.router.navigate(["admin"]);
    }

  }

  onChange(event:any){
    if (event.target.files && event.target.files.length){
      this.image = event.target.files[0];
    }
  }
}
