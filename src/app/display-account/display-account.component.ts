import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-account',
  templateUrl: './display-account.component.html',
  styleUrls: ['./display-account.component.css']
})
export class DisplayAccountComponent implements OnInit {

  @Input() accountDetails;
  @Input() i;
  @Output() statusChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onstatusChange(eventData){
    console.log(eventData.target);
    // this.statusChanged.emit({
    //   id  : this.target.id
    // })
    // console.log(eventData.target.value);
  }

}