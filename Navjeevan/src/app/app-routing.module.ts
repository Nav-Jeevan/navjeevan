import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContributionComponent } from './contribution/contribution.component';

const routes: Routes =[
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contribution', component: ContributionComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
