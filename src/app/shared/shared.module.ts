import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NavPanelComponent } from './nav-panel/nav-panel.component';



@NgModule({
  exports: [
    NavbarComponent
  ],
  declarations: [
    NavbarComponent,
    NavPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
