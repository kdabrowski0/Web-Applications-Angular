import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent {
  public isDisabled(){
    const status = localStorage.getItem('status');
    if(status === 'true'){
      return false;
    } else {
      return true;
    }
  }
}
