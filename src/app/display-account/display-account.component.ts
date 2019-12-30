import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-display-account',
  templateUrl: './display-account.component.html',
  styleUrls: ['./display-account.component.css']
})
export class DisplayAccountComponent implements OnInit {

  @Input() accountDetails;
  constructor() { }

  ngOnInit() {
  }

  onstatusChange(eventData : Event){
    console.log(eventData);
  }

}