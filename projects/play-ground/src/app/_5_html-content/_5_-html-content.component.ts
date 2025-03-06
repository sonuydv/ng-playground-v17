import {Component,} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {HtmlPopupComponent} from "./html-popup/html-popup.component";

@Component({
  selector: 'app-_5_html-content',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './_5_-html-content.component.html',
  styleUrl: './_5_-html-content.component.scss'
})
export class _5_HtmlContentComponent{

  readonly form = new FormGroup({
    name:new FormControl(''),
    mobile:new FormControl(''),
  })

  constructor(
    private matDialog:MatDialog
  ) {
  }


  openPopup(){
    console.log(this.form.value)
    this.matDialog.open(HtmlPopupComponent,{
      data:this.form.value
    })
  }


}
