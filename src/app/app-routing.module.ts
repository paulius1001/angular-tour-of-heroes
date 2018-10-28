import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Heroes2Component } from './heroes2/heroes2.component';

const routes: Routes = [
	{
		path: 'hero_step_2',
		component: Heroes2Component
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
