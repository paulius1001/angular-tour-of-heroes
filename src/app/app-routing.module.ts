import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { heroes6Component } from './heroes6/heroes6.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'hero_step_6', component: heroes6Component },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
