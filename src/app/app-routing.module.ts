import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { Comp1Component } from './comp1/comp1.component';
import { HomeComponent } from './home/home.component';
import { Comp2Component } from './comp2/comp2.component';
import { Gltacct1Component } from './gltacct1/gltacct1.component';
import { Glrlist1Component } from './glrlist1/glrlist1.component';
import { Asfsprf1Component } from './asfsprf1/asfsprf1.component';
import { Aprinvr1Component } from './aprinvr1/aprinvr1.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'comp1', component: Comp1Component, data: { text: 'comp1' } },
  { path: 'comp2', component: Comp2Component, data: { text: 'comp2' } },
  { path: 'gltacct1', component: Gltacct1Component, data: { text: 'gltacct1' } },
  { path: 'glrlist1', component: Glrlist1Component, data: { text: 'glrlist1' } },
  { path: 'asfsprf1', component: Asfsprf1Component, data: { text: 'asfsprf1' } },
  { path: 'aprinvr1', component: Aprinvr1Component, data: { text: 'aprinvr1' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
