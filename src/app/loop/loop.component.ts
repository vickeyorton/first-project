import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnInit {

  @Input('user') user:User;
  isToggle : boolean = true;
  
  constructor() {
    
   }

  toggleFunction(){
    this.isToggle = !this.isToggle;
  }

  ngOnInit() {
    this.user = {
      name : this.user.name,
      title : this.user.title,
      address : this.user.address,
      Phone : this.user.Phone
    };
  }

}
