import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component, Comp1PipeStartsWith } from './comp1/comp1.component';
import { IgxAutocompleteModule, IgxButtonModule, IgxDialogModule, IgxDropDownModule, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxRippleModule, IgxTabsModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp1PipeStartsWith,
    HomeComponent,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxDialogModule,
    IgxAutocompleteModule,
    IgxDropDownModule,
    IgxInputGroupModule,
    IgxRippleModule,
	IgxIconModule,
  IgxTabsModule,
  IgxGridModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
