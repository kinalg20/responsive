import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'career-p';
  Isshowmodel :boolean=false;
  string:any;
  applyfunc(string:any){
    this.Isshowmodel=!this.Isshowmodel
    this.string=string
  }

  close(){
    this.Isshowmodel=false
  }
}
