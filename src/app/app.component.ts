import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disabled=false;
  name = 'my-dream-app';

  onUpdateName(data:Event){
    console.log(data);
   this.name=(<HTMLInputElement>event?.target).value;
  }
}
