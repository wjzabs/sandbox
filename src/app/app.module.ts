import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component, Comp1PipeStartsWith } from './comp1/comp1.component';
// import { IgxAutocompleteModule, IgxButtonModule, IgxCheckboxModule, IgxDialogModule, IgxDropDownModule, IgxGridModule, 
//   IgxIconModule, IgxInputGroupModule, IgxNavbarModule, IgxRadioGroupDirective, IgxRadioModule, IgxRippleModule, IgxSelectModule, 
//   IgxTabsModule, IgxToastModule, IgxToggleModule, IgxTooltipModule } from '@infragistics/igniteui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { DraggableDirective } from './draggable.directive';
import { Gltacct1Component } from './gltacct1/gltacct1.component';
import { Glrlist1Component } from './glrlist1/glrlist1.component';
import { Asfsprf1Component } from './asfsprf1/asfsprf1.component';
import { Aprinvr1Component } from './aprinvr1/aprinvr1.component';
import { AbsActionMenuComponent } from './abs-action-menu/abs-action-menu.component';
import { AbsIgxModule } from './abs-igx.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp1PipeStartsWith,
    HomeComponent,
    Comp2Component,
    Comp3Component,
    DraggableDirective,
    Gltacct1Component,
    Glrlist1Component,
    Asfsprf1Component,
    AbsActionMenuComponent,
    Aprinvr1Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  //   IgxButtonModule,
  //   IgxDialogModule,
  //   IgxAutocompleteModule,
  //   IgxDropDownModule,
  //   IgxInputGroupModule,
  //   IgxRippleModule,
	// IgxIconModule,
  // IgxTabsModule,
  // IgxGridModule,
  // IgxSelectModule,
	// IgxToggleModule,
  // IgxRadioModule,
  // IgxCheckboxModule,
  // IgxToastModule,
  // IgxNavbarModule,
  // IgxTooltipModule,
    FormsModule,
    AbsIgxModule,
      // IgxRadioModule,
    // IgxRadioGroupDirective,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
