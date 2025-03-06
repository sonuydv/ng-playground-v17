import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserModel} from "../user.model";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  private readonly fb = inject(FormBuilder);

  protected form : FormGroup;
  constructor() {
   this.form = this.fb.group({
     name:[],
     address:this.fb.group({
       city:[],
       state:[],
       country:[]
     }),
   })
  }


  patchValue(){
   this.form.patchValue(this.getUser());
  }

  getUser():UserModel{
    const user:UserModel = {
      name:"Sonu",
      gender:'male',
      address:{
        city:'New Delhi',
        state:'Delhi',
        country:'India'
      }
    }
    return user;
  }

  readonly handler = {
    set(target:any, property:any, value:any) {
      if (target[property] !== value) {
        console.log(`Property ${property} changed from ${target[property]} to ${value}`);
      }
      target[property] = value;
      return true;
    }
  }

  readonly proxy = new Proxy<UserModel>(this.getUser(),this.handler);

}
