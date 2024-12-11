import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {UserModel} from "../user.model";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule
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
    const user:UserModel = {
      name:"Sonu",
      gender:'male',
      address:{
        city:'New Delhi',
        state:'Delhi',
        country:'India'
      }
    }
   this.form.patchValue(user);
  }

}
