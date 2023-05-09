import { Component } from '@angular/core';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  name: string=""
  age: number=0
  friends: string=""

  getAgeMessage() {
    if (this.age > 23) {
      return 'Soy mayor de 23';
    } else {
      return 'Soy menor de 23';
    }
  }
}

  



