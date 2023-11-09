import { Component } from '@angular/core';
import { MenuItem } from 'src/app/foundation/interfaces/navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public menuItems: MenuItem[] = [

    {
      icon: "bi bi-facebook"
    },

    {
      icon: "bi bi-instagram"
    },

    {
      icon: "bi bi-linkedin"
    },

  ];

  public isHidden: boolean = true;

  onHidden():void {
    this.isHidden = !this.isHidden;
    console.log(this.isHidden);
  }

}
