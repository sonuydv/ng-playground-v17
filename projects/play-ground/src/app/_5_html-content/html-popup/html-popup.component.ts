import {AfterViewInit, Component, ElementRef, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {data} from "autoprefixer";

@Component({
  selector: 'app-html-popup',
  standalone: true,
  imports: [],
  templateUrl: './html-popup.component.html',
  styleUrl: './html-popup.component.scss'
})
export class HtmlPopupComponent implements AfterViewInit{
  @ViewChild('container',{static:false}) container: ElementRef | undefined;

  constructor(
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) {
  }

  ngAfterViewInit() {
    if(this.container) this.loadHtml();
  }

  loadHtml(){
    this.http.get('assets/app/index.html',{responseType:'text'})
      .subscribe(async html => {
        const container = this.container?.nativeElement;
        container.innerHTML = html;

        await this.loadAndExecuteScripts(container);
        window.addEventListener('c-msg',(event)=>{
          console.log(event);
        })
        this.send();
      })
  }


  send(){
    const event = new CustomEvent('ng-msg',{
      detail : {message:'Ng Message',data:this.data}
    })
    window.dispatchEvent(event);
  }


  loadAndExecuteScripts(container: HTMLElement) {

    const scripts = Array.from(container.getElementsByTagName('script'));

    const loadScript = (script: HTMLScriptElement) => {
      return new Promise<void>((resolve, reject) => {
        const newScript = document.createElement('script');

        if (script.src) {
          // External script
          newScript.src = script.src;
          newScript.onload = () => resolve();
          newScript.onerror = () => reject(`Failed to load script: ${script.src}`);
        } else {
          // Inline script
          newScript.textContent = script.innerText;
          resolve();
        }

        document.body.appendChild(newScript);
      });
    };
    // Load scripts in sequence
    return scripts.reduce((prev, script) => {
      return prev.then(() => loadScript(script));
    }, Promise.resolve());
  }
}
