import { Component } from '@angular/core';
import { User } from './loop/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  user:User;
  constructor(){
        this.user = new User();
      
        this.user.name = 'Vignesh';
        this.user.title = 'Software Developer';
        this.user.address = 'Ayanavaram, Chennai:600023, TamilNadu, India';
        this.user.Phone = [
          '+91 9962354801',
          '+91 9962494801',
          '+91 8778703972'
        ];
      
  }
}
