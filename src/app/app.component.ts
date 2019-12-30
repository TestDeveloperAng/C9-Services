import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  accounts =  [
    {
      name : 'Account 1',
      balance : 2000,
      status : 'active'
    },

    {
      name : 'Account 2',
      balance : 0,
      status : 'active'
    }
  ]
}
