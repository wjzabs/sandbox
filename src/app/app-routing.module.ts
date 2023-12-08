import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { Comp1Component } from './comp1/comp1.component';
import { HomeComponent } from './home/home.component';
import { Comp2Component } from './comp2/comp2.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'comp1', component: Comp1Component, data: { text: 'comp1' } },
  { path: 'comp2', component: Comp2Component, data: { text: 'comp1' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
