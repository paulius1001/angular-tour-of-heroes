import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Heroes4Component } from './heroes4/heroes4.component';

const routes: Routes = [
	{
		path: 'hero_step_4',
		component: Heroes4Component
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
