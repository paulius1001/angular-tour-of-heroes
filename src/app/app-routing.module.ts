import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Heroes3Component } from './heroes3/heroes3.component';

const routes: Routes = [
	{
		path: 'hero_step_3',
		component: Heroes3Component
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
