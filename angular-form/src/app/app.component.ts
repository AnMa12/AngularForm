import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickMessage = '';
  values = '';

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
