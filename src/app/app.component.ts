import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'Razvan';

  checkEmptyString() {
    return this.username !== '';
  }

  onClickAddUsername() {
    this.username = '';
  }
}
