import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: ()=> import('./foundation/foundation-routing.module').then( m => m.FoundationRoutingModule),
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'foundation'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
