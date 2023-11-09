import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FoundationRoutingModule } from './foundation-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  exports: [
    MainPageComponent
  ],
  declarations: [
    MainPageComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FoundationRoutingModule
  ]
})
export class FoundationModule { }
