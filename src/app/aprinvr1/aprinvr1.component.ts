import { Component } from '@angular/core';
import { GridColumnDataType } from '@infragistics/igniteui-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-aprinvr1',
  templateUrl: './aprinvr1.component.html',
  styleUrls: ['./aprinvr1.component.scss']
})
export class Aprinvr1Component {

  public APRINVR1: APRINVR1 = new APRINVR1();
  public GLTPARM1: GLTPARM1 = new GLTPARM1();
  public ASTDSQLAs: ASTDSQLA[] = [
    { FORM_NAME: 'APRINVR1', COLUMN_NAME: 'ACCT_CODE', COLUMN_CAPTION: 'Processor', SORTABLE: '0', COLUMN_LAST: '', VIEW_NAME: 'ACCT_CODE', COLUMN_SEQ: '', PAGE_EJECT: '0', EXCL_CODES: '0', CODE_VALUES: '' },
    { FORM_NAME: 'APRINVR1', COLUMN_NAME: 'SEG2_CODE', COLUMN_CAPTION: 'Vendor', SORTABLE: '0', COLUMN_LAST: '0', VIEW_NAME: 'SEG2_CODE', COLUMN_SEQ: '', PAGE_EJECT: '0', EXCL_CODES: '0', CODE_VALUES: '' },
    { FORM_NAME: 'APRINVR1', COLUMN_NAME: 'SEG3_CODE', COLUMN_CAPTION: 'Voucher', SORTABLE: '0', COLUMN_LAST: '0', VIEW_NAME: 'SEG3_CODE', COLUMN_SEQ: '', PAGE_EJECT: '0', EXCL_CODES: '0', CODE_VALUES: '' },
  ]

  datacolumns = [
    { COLUMN_NAME: 'COLUMN_CAPTION', COLUMN_CAPTION: 'Code', COLUMN_WIDTH: "200px", COLUMN_TYPE: GridColumnDataType.String, COLUMN_EDITABLE: false},
    { COLUMN_NAME: 'COLUMN_SEQ', COLUMN_CAPTION: 'Seq', COLUMN_WIDTH: "120px", COLUMN_TYPE: GridColumnDataType.Number, COLUMN_EDITABLE: true},
    { COLUMN_NAME: 'PAGE_EJECT', COLUMN_CAPTION: 'Page', COLUMN_WIDTH: "120px", COLUMN_TYPE: GridColumnDataType.Boolean, COLUMN_EDITABLE: true},
    { COLUMN_NAME: 'EXCL_CODES', COLUMN_CAPTION: 'Excl', COLUMN_WIDTH: "120px", COLUMN_TYPE: GridColumnDataType.Boolean, COLUMN_EDITABLE: true},
    { COLUMN_NAME: 'CODE_VALUES', COLUMN_CAPTION: 'Values', COLUMN_WIDTH: "500px", COLUMN_TYPE: GridColumnDataType.String, COLUMN_EDITABLE: true},
  ];

  changeData(COLUMN_NAME: string, value2: boolean) {
    console.log('value', value2)
    const value: string = (value2 ? '1' : '0');
    if (COLUMN_NAME == 'ACCT_CODES') {this.APRINVR1['ACCT_CODES'] = value}
    if (COLUMN_NAME == 'SEG2_CODES') {this.APRINVR1['SEG2_CODES'] = value}
    if (COLUMN_NAME == 'SEG3_CODES') {this.APRINVR1['SEG3_CODES'] = value}
    if (COLUMN_NAME == 'MY_RECORDS_ONLY') {this.APRINVR1['MY_RECORDS_ONLY'] = value}
  }

constructor(
  public appComponent: AppComponent
  ) {}

  proceed() {
    console.log("Print Report")
    if (!(this.APRINVR1.MY_RECORDS_ONLY == '1')) {
      alert("Nothing to Print")
      return
    }
   
    // this.appComponent.printReport('APRINVR1', {});
  }
}

export class APRINVR1 {
  ACCT_CODES!: string;
  SEG2_CODES: string = '0';
  SEG3_CODES!: string;
  MY_RECORDS_ONLY!: string;

}

export class GLTPARM1 {
  GL_PARM_SEG2_DESC: string = 'Dept';
  GL_PARM_SEG3_DESC: string = 'TrCls';
  GL_PARM_SEG4_DESC: string = '';
  // GL_PARM_SEG4_DESC: string = 'Cllctn';
}

export class ASTDSQLA {
  FORM_NAME!: string;
  COLUMN_NAME!: string;
  COLUMN_CAPTION!: string;
  SORTABLE!: string;
  COLUMN_LAST!: string;
  VIEW_NAME!: string;
  COLUMN_SEQ!: string;
  PAGE_EJECT!: string;
  EXCL_CODES!: string;
  CODE_VALUES!: string;
}

