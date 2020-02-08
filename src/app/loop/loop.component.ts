import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnInit {

  user : any;
  constructor() {
    this.user = {
      name : 'Vignesh',
      title : 'Software Developer',
      address : 'Ayanavaram, Chennai:600023, TamilNadu, India',
      Phone : [
        '+91 9962354801',
        '+91 9962494801',
        '+91 8778703972'
      ]
    };
   }

  ngOnInit(): void {
  }

}
