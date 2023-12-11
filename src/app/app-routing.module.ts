import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DummyPageComponent } from './dummy-page/dummy-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },

  { path: 'landingpage', component: LandingPageComponent },
  { path: 'dummypage', component: DummyPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
