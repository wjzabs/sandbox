import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IgxAccordionModule, 
  IgxActionStripModule,
  IgxAvatarModule,
  IgxBadgeModule,
  IgxBottomNavModule,
  IgxButtonGroupModule,
  IgxButtonModule,
  IgxCardModule,
  IgxCheckboxModule,
  IgxComboModule,
  IgxDialogModule,
  IgxDividerModule,
  IgxDropDownModule,
  IgxExpansionPanelModule,
  IgxFilterModule,
  IgxGridModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxLayoutModule,
  IgxListModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule,
  IgxProgressBarModule,
        IgxRadioModule,
    IgxRadioGroupDirective,
  IgxRippleModule,
  IgxSelectModule,
  IgxSnackbarModule,
  IgxSplitterModule,
  IgxSwitchModule,
  IgxTabsModule,
  IgxToggleModule,
  IgxToastModule,
  IgxTooltipModule,
  IgxTreeGridModule,
  IgxTreeModule,
  IgxAutocompleteModule
} from '@infragistics/igniteui-angular';;

// import { IgxActionStripModule, IgxHierarchicalGridModule } from '@infragistics/igniteui-angular';
// import { IgxBubbleSeriesModule, IgxCategoryChartModule, IgxCrosshairLayerModule, IgxDataChartAnnotationModule,
//     IgxDataChartCategoryCoreModule, IgxDataChartCategoryModule, IgxDataChartCoreModule, IgxDataChartInteractivityModule,
//     IgxDataChartScatterCoreModule, IgxDataChartScatterModule, IgxDataChartStackedModule, IgxLegendModule,
//     IgxNumericXAxisModule, IgxNumericYAxisModule, IgxStackedFragmentSeriesModule,
//     IgxZoomSliderDynamicModule } from '@infragistics/igniteui-angular-charts';
// import { IgxExcelModule } from "igniteui-angular-excel";
// import { IgxSpreadsheetModule } from "igniteui-angular-spreadsheet";

const Modules = [
  
  FormsModule,

  IgxAccordionModule, 
  IgxActionStripModule,
  IgxAutocompleteModule,
  IgxAvatarModule,
  IgxBadgeModule,
  IgxBottomNavModule,
  IgxButtonGroupModule,
  IgxButtonModule,
  IgxCardModule,
  IgxCheckboxModule,
  IgxComboModule,
  IgxDialogModule,
  IgxDividerModule,
  IgxDropDownModule,
  IgxExpansionPanelModule,
  IgxFilterModule,
  IgxGridModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxLayoutModule,
  IgxListModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule,
  IgxProgressBarModule,
  IgxRadioModule,
  IgxRadioGroupDirective,
  IgxRippleModule,
  IgxSelectModule,
  IgxSnackbarModule,
  IgxSplitterModule,
  IgxSwitchModule,
  IgxTabsModule,
  IgxToastModule,
  IgxToggleModule,
  IgxTooltipModule,
  IgxTreeGridModule,
  IgxTreeModule
]

@NgModule({
    declarations: [
    ],
    imports: [ ...Modules
    ],
    exports: [ ...Modules
    ],
    providers: [
    ]
  })
  export class AbsIgxModule {}
