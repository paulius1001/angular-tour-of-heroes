import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Heroes1Component } from './heroes1/heroes1.component';

const routes: Routes = [
	{
		path: 'hero_step_1',
		component: Heroes1Component
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
