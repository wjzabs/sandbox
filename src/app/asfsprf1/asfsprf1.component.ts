import { Component } from '@angular/core';
import { GridColumnDataType } from '@infragistics/igniteui-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-asfsprf1',
  templateUrl: './asfsprf1.component.html',
  styleUrls: ['./asfsprf1.component.scss']
})
export class Asfsprf1Component {

  public ASTSPRF1s: ASTSPRF1[] =  [
      {
        "REPORT_NO": "000001",
        "FORM_NAME": "GLRLIST1",
        "XNO": "0000000002",
        "USER_ID": "wjz",
        "YYYYPP": "2012312",
        "YP_LEGEND": "2023-12 (Dec'23)  ",
        "RPT_TITLE": "GL Accounts",
        "RWU": "",
        "RPT": "GLRLIST1",
        "COMPUTER_NAME": "DESKTOP-1NNITKT",
        "REPORT_DATE": new Date(2023, 11, 10, 19, 33, 10),
        "SESSION_NO": "0000296294",
        "MENU_ITEM_OBJECT": "GLTLIST1",
        "MENU_ITEM_TYPE": "R",
        "MENU_ITEM_SECURITY": "",
        "VERSION_NO": "",
        "SET_ID": "",
        "SET_DESC": "",
        "JOB_STREAM_XNO": "",
        "JOB_STREAM_LNO": 1,
        "MENU_ID": "BSE",
        "FILETYPE": "XLS"
      },
      {
        "REPORT_NO": "000002",
        "FORM_NAME": "GLRLIST1",
        "XNO": "0000000002",
        "USER_ID": "wjz",
        "YYYYPP": "2012312",
        "YP_LEGEND": "2023-12 (Dec'23)  ",
        "RPT_TITLE": "GL Account Segments",
        "RWU": "",
        "RPT": "GLRLIST2",
        "COMPUTER_NAME": "DESKTOP-1NNITKT",
        "REPORT_DATE": new Date(2023, 11, 10, 19, 33, 10),
        "SESSION_NO": "0000296294",
        "MENU_ITEM_OBJECT": "GLTLIST1",
        "MENU_ITEM_TYPE": "R",
        "MENU_ITEM_SECURITY": "",
        "VERSION_NO": "",
        "SET_ID": "",
        "SET_DESC": "",
        "JOB_STREAM_XNO": "",
        "JOB_STREAM_LNO": 1,
        "MENU_ID": "BSE",
        "FILETYPE": "XLS"
    },
    {
        "REPORT_NO": "000001",
        "FORM_NAME": "GLRLIST1",
        "XNO": "0000000002",
        "USER_ID": "wjz",
        "YYYYPP": "2012312",
        "YP_LEGEND": "2023-12 (Dec'23)  ",
        "RPT_TITLE": "Account Listing",
        "RWU": "",
        "RPT": "GLRLIST1",
        "COMPUTER_NAME": "DESKTOP-1NNITKT",
        "REPORT_DATE": new Date(2023, 11, 10, 19, 33, 10),
        "SESSION_NO": "0000296294",
        "MENU_ITEM_OBJECT": "GLTLIST1",
        "MENU_ITEM_TYPE": "R",
        "MENU_ITEM_SECURITY": "",
        "VERSION_NO": "",
        "SET_ID": "",
        "SET_DESC": "",
        "JOB_STREAM_XNO": "",
        "JOB_STREAM_LNO": 1,
        "MENU_ID": "BSE",
        "FILETYPE": "PDF"
    },
    {
        "REPORT_NO": "000001",
        "FORM_NAME": "GLRLIST1",
        "XNO": "0000000002",
        "USER_ID": "wjz",
        "YYYYPP": "2012312",
        "YP_LEGEND": "2023-12 (Dec'23)  ",
        "RPT_TITLE": "Account Segment Listing",
        "RWU": "",
        "RPT": "GLRLIST2",
        "COMPUTER_NAME": "DESKTOP-1NNITKT",
        "REPORT_DATE": new Date(2023, 11, 10, 19, 33, 10),
        "SESSION_NO": "0000296294",
        "MENU_ITEM_OBJECT": "GLTLIST1",
        "MENU_ITEM_TYPE": "R",
        "MENU_ITEM_SECURITY": "",
        "VERSION_NO": "",
        "SET_ID": "",
        "SET_DESC": "",
        "JOB_STREAM_XNO": "",
        "JOB_STREAM_LNO": 1,
        "MENU_ID": "BSE",
        "FILETYPE": "PDF"
    },
    {
        "REPORT_NO": "392988",
        "FORM_NAME": "BSRINVP1",
        "XNO": "0000000002",
        "USER_ID": "wjz",
        "YYYYPP": "201810",
        "YP_LEGEND": "2018-10 (Oct'18)  ",
        "RPT_TITLE": "Invoice Printing",
        "RWU": "",
        "RPT": "BSRINVP1",
        "COMPUTER_NAME": "DESKTOP-1NNITKT",
        "REPORT_DATE": new Date(2019, 2, 4, 6, 54,25),
        "SESSION_NO": "0000296294",
        "MENU_ITEM_OBJECT": "BSRINVP1",
        "MENU_ITEM_TYPE": "R",
        "MENU_ITEM_SECURITY": "",
        "VERSION_NO": "",
        "SET_ID": "",
        "SET_DESC": "",
        "JOB_STREAM_XNO": "",
        "JOB_STREAM_LNO": 1,
        "MENU_ID": "BSE",
        "FILETYPE": "PDF"
    },
    {
        "REPORT_NO": "392989",
        "FORM_NAME": "BSRINVP1",
        "XNO": "0000000002",
        "USER_ID": "wjz",
        "YYYYPP": "201810",
        "YP_LEGEND": "2018-10 (Oct'18)  ",
        "RPT_TITLE": "Charges Excluded from the Invoice",
        "RWU": "",
        "RPT": "BSRINVP1",
        "COMPUTER_NAME": "DESKTOP-1NNITKT",
        "REPORT_DATE": new Date(2019, 2, 4, 6, 54, 26),
        "SESSION_NO": "0000296294",
        "MENU_ITEM_OBJECT": "BSRINVP1",
        "MENU_ITEM_TYPE": "R",
        "MENU_ITEM_SECURITY": "",
        "VERSION_NO": "",
        "SET_ID": "",
        "SET_DESC": "",
        "JOB_STREAM_XNO": "",
        "JOB_STREAM_LNO": 2,
        "MENU_ID": "BSE",
        "FILETYPE": "PDF"
    },
    {
        "REPORT_NO": "392990",
        "FORM_NAME": "BSRINVP1",
        "XNO": "0000000002",
        "USER_ID": "wjz",
        "YYYYPP": "201810",
        "YP_LEGEND": "2018-10 (Oct'18)  ",
        "RPT_TITLE": "Invoices to be Mailed",
        "RWU": "",
        "RPT": "BSRINVP1",
        "COMPUTER_NAME": "DESKTOP-1NNITKT",
        "REPORT_DATE":  new Date(2019, 2, 4, 6, 54, 28),
        "SESSION_NO": "0000296294",
        "MENU_ITEM_OBJECT": "BSRINVP1",
        "MENU_ITEM_TYPE": "R",
        "MENU_ITEM_SECURITY": "",
        "VERSION_NO": "",
        "SET_ID": "",
        "SET_DESC": "",
        "JOB_STREAM_XNO": "",
        "JOB_STREAM_LNO": 3,
        "MENU_ID": "BSE",
        "FILETYPE": "PDF"
    },
    {
        "REPORT_NO": "392991",
        "FORM_NAME": "BSRINVP1",
        "XNO": "0000000003",
        "USER_ID": "wjz",
        "YYYYPP": "201810",
        "YP_LEGEND": "2018-10 (Oct'18)  ",
        "RPT_TITLE": "Invoice Printing",
        "RWU": "",
        "RPT": "BSRINVP1",
        "COMPUTER_NAME": "DESKTOP-1NNITKT",
        "REPORT_DATE":  new Date(2019, 2, 4, 7, 0, 3),
        "SESSION_NO": "0000296294",
        "MENU_ITEM_OBJECT": "BSRINVP1",
        "MENU_ITEM_TYPE": "R",
        "MENU_ITEM_SECURITY": "",
        "VERSION_NO": "",
        "SET_ID": "",
        "SET_DESC": "",
        "JOB_STREAM_XNO": "",
        "JOB_STREAM_LNO": 4,
        "MENU_ID": "BSE",
        "FILETYPE": "PDF"
    },
    {
        "REPORT_NO": "392992",
        "FORM_NAME": "BSRINVP1",
        "XNO": "0000000003",
        "USER_ID": "wjz",
        "YYYYPP": "201810",
        "YP_LEGEND": "2018-10 (Oct'18)  ",
        "RPT_TITLE": "Charges Excluded from the Invoice",
        "RWU": "",
        "RPT": "BSRINVP1",
        "COMPUTER_NAME": "DESKTOP-1NNITKT",
        "REPORT_DATE":  new Date(2019, 2, 4, 7, 3, 22),
        "SESSION_NO": "0000296294",
        "MENU_ITEM_OBJECT": "BSRINVP1",
        "MENU_ITEM_TYPE": "R",
        "MENU_ITEM_SECURITY": "",
        "VERSION_NO": "",
        "SET_ID": "",
        "SET_DESC": "",
        "JOB_STREAM_XNO": "",
        "JOB_STREAM_LNO": 5,
        "MENU_ID": "BSE",
        "FILETYPE": "PDF"
    },
    {
        "REPORT_NO": "392993",
        "FORM_NAME": "BSRINVP1",
        "XNO": "0000000003",
        "USER_ID": "wjz",
        "YYYYPP": "201810",
        "YP_LEGEND": "2018-10 (Oct'18)  ",
        "RPT_TITLE": "Invoices to be Mailed",
        "RWU": "",
        "RPT": "BSRINVP1",
        "COMPUTER_NAME": "DESKTOP-1NNITKT",
        "REPORT_DATE": new Date(2019, 2, 4, 7, 3, 23),
        "SESSION_NO": "0000296294",
        "MENU_ITEM_OBJECT": "BSRINVP1",
        "MENU_ITEM_TYPE": "R",
        "MENU_ITEM_SECURITY": "",
        "VERSION_NO": "",
        "SET_ID": "",
        "SET_DESC": "",
        "JOB_STREAM_XNO": "",
        "JOB_STREAM_LNO": 6,
        "MENU_ID": "BSE",
        "FILETYPE": "PDF"
    },
    {
        "REPORT_NO": "393015",
        "FORM_NAME": "BSRINVP1",
        "XNO": "0000000006",
        "USER_ID": "wjz",
        "YYYYPP": "201810",
        "YP_LEGEND": "2018-10 (Oct'18)  ",
        "RPT_TITLE": "Invoice Printing",
        "RWU": "",
        "RPT": "BSRINVP1",
        "COMPUTER_NAME": "DESKTOP-1NNITKT",
        "REPORT_DATE": new Date(2019, 2, 5, 4, 27, 11),
        "SESSION_NO": "0000296318",
        "MENU_ITEM_OBJECT": "BSRINVP1",
        "MENU_ITEM_TYPE": "R",
        "MENU_ITEM_SECURITY": "",
        "VERSION_NO": "",
        "SET_ID": "",
        "SET_DESC": "",
        "JOB_STREAM_XNO": "",
        "JOB_STREAM_LNO": 7,
        "MENU_ID": "BSE",
        "FILETYPE": "PDF"
    },
    {
        "REPORT_NO": "393016",
        "FORM_NAME": "BSRINVP1",
        "XNO": "0000000006",
        "USER_ID": "wjz",
        "YYYYPP": "201810",
        "YP_LEGEND": "2018-10 (Oct'18)  ",
        "RPT_TITLE": "Charges Excluded from the Invoice",
        "RWU": "",
        "RPT": "BSRINVP1",
        "COMPUTER_NAME": "DESKTOP-1NNITKT",
        "REPORT_DATE":  new Date(2019, 2, 5, 4, 27, 11),
        "SESSION_NO": "0000296318",
        "MENU_ITEM_OBJECT": "BSRINVP1",
        "MENU_ITEM_TYPE": "R",
        "MENU_ITEM_SECURITY": "",
        "VERSION_NO": "",
        "SET_ID": "",
        "SET_DESC": "",
        "JOB_STREAM_XNO": "",
        "JOB_STREAM_LNO": 8,
        "MENU_ID": "BSE",
        "FILETYPE": "PDF"
    },
    {
        "REPORT_NO": "393017",
        "FORM_NAME": "BSRINVP1",
        "XNO": "0000000006",
        "USER_ID": "wjz",
        "YYYYPP": "201810",
        "YP_LEGEND": "2018-10 (Oct'18)  ",
        "RPT_TITLE": "Invoices to be Mailed",
        "RWU": "",
        "RPT": "BSRINVP1",
        "COMPUTER_NAME": "DESKTOP-1NNITKT",
        "REPORT_DATE":  new Date(2019, 2, 5, 4, 27, 12),
        "SESSION_NO": "0000296318",
        "MENU_ITEM_OBJECT": "BSRINVP1",
        "MENU_ITEM_TYPE": "R",
        "MENU_ITEM_SECURITY": "",
        "VERSION_NO": "",
        "SET_ID": "",
        "SET_DESC": "",
        "JOB_STREAM_XNO": "",
        "JOB_STREAM_LNO": 9,
        "MENU_ID": "BSE",
        "FILETYPE": "PDF"
    }
]

  // datacolumns = [
  //   { COLUMN_NAME: 'COLUMN_CAPTION', COLUMN_CAPTION: 'Code', COLUMN_WIDTH: "200px", COLUMN_TYPE: GridColumnDataType.String, COLUMN_EDITABLE: false},
  //   { COLUMN_NAME: 'COLUMN_SEQ', COLUMN_CAPTION: 'Seq', COLUMN_WIDTH: "120px", COLUMN_TYPE: GridColumnDataType.Number, COLUMN_EDITABLE: true},
  //   { COLUMN_NAME: 'PAGE_EJECT', COLUMN_CAPTION: 'Page', COLUMN_WIDTH: "120px", COLUMN_TYPE: GridColumnDataType.Boolean, COLUMN_EDITABLE: true},
  //   { COLUMN_NAME: 'EXCL_CODES', COLUMN_CAPTION: 'Excl', COLUMN_WIDTH: "120px", COLUMN_TYPE: GridColumnDataType.Boolean, COLUMN_EDITABLE: true},
  //   { COLUMN_NAME: 'CODE_VALUES', COLUMN_CAPTION: 'Values', COLUMN_WIDTH: "500px", COLUMN_TYPE: GridColumnDataType.String, COLUMN_EDITABLE: true},
  // ];
 
  datacolumns = [

    { 
      COLUMN_KEY: 'REPORT_NO',
      COLUMN_HEADER: 'Report No',
      COLUMN_WIDTH: '10%',
      COLUMN_MASK: '',
      DATA_TYPE: 'V',
      COLUMN_TYPE: GridColumnDataType.String,
      COLUMN_CLASSES: 'grd-column col-string',
      COLUMN_EDITABLE: false,
    },
    { 
      COLUMN_KEY: 'FORM_NAME',
      COLUMN_HEADER: 'Form',
      COLUMN_WIDTH: '12%',
      COLUMN_MASK: '',
      DATA_TYPE: 'V',
      COLUMN_TYPE: GridColumnDataType.String,
      COLUMN_CLASSES: 'grd-column col-string',
      COLUMN_EDITABLE: false,
    },
    { 
      COLUMN_KEY: 'XNO',
      COLUMN_HEADER: 'X-No',
      COLUMN_WIDTH: '10%',
      COLUMN_MASK: '',
      DATA_TYPE: 'V',
      COLUMN_TYPE: GridColumnDataType.String,
      COLUMN_CLASSES: 'grd-column col-string',
      COLUMN_EDITABLE: false,
    },
    { 
      COLUMN_KEY: 'YP_LEGEND',
      COLUMN_HEADER: 'Period',
      COLUMN_WIDTH: '12%',
      COLUMN_MASK: '',
      DATA_TYPE: 'V',
      COLUMN_TYPE: GridColumnDataType.String,
      COLUMN_CLASSES: 'grd-column col-string',
      COLUMN_EDITABLE: false,
    },
    { 
      COLUMN_KEY: 'RPT_TITLE',
      COLUMN_HEADER: 'Report Title',
      COLUMN_WIDTH: '20%',
      COLUMN_MASK: '',
      DATA_TYPE: 'V',
      COLUMN_TYPE: GridColumnDataType.String,
      COLUMN_CLASSES: 'grd-column col-string',
      COLUMN_EDITABLE: false,
    },
    { 
      COLUMN_KEY: 'RPT',
      COLUMN_HEADER: 'Report',
      COLUMN_WIDTH: '10%',
      COLUMN_MASK: '',
      DATA_TYPE: 'V',
      COLUMN_TYPE: GridColumnDataType.String,
      COLUMN_CLASSES: 'grd-column col-string',
      COLUMN_EDITABLE: false,
    },
    { 
      COLUMN_KEY: 'REPORT_DATE',
      COLUMN_HEADER: 'Report Date',
      COLUMN_WIDTH: '15%',
      COLUMN_MASK: '',
      DATA_TYPE: 'D',
      COLUMN_TYPE: GridColumnDataType.Date,
      COLUMN_CLASSES: 'grd-column col-datetime',
      COLUMN_EDITABLE: false,
    },
    { 
      COLUMN_KEY: 'FILETYPE',
      COLUMN_HEADER: 'Type',
      COLUMN_WIDTH: '5%',
      COLUMN_MASK: '',
      DATA_TYPE: 'V',
      COLUMN_TYPE: GridColumnDataType.Image,
      COLUMN_CLASSES: 'grd-column col-string',
      COLUMN_EDITABLE: false,
    },
    { 
      COLUMN_KEY: 'FILENAME_ORIG',
      COLUMN_HEADER: 'File Name',
      COLUMN_WIDTH: '10%',
      COLUMN_MASK: '',
      DATA_TYPE: 'V',
      COLUMN_TYPE: GridColumnDataType.String,
      COLUMN_CLASSES: 'grd-column col-string',
      COLUMN_EDITABLE: false,
    },
  ]

  constructor(
    public appComponent: AppComponent
    ) { }

  getReport(cell:any) {
    console.log('getReport', cell);
    window.open('https://absapi.absolution1.com/MyStaticFiles/index.html')
    // alert(cell._row._data.RPT_TITLE)
  }

  proceed() {
    console.log("Print Report")

    // this.appComponent.printReport('ASFSPRF1', {});

  }  
}

export class ASTSPRF1 {                   
  REPORT_NO!: string;                      
  FORM_NAME!: string;                      
  XNO!: string;                            
  USER_ID!: string;                        
  YYYYPP!: string;                         
  YP_LEGEND!: string;                      
  RPT_TITLE!: string;                      
  RWU!: string;                            
  RPT!: string;                            
  COMPUTER_NAME!: string;                  
  REPORT_DATE!: Date;                      
  SESSION_NO!: string;                     
  MENU_ITEM_OBJECT!: string;               
  MENU_ITEM_TYPE!: string;                 
  MENU_ITEM_SECURITY!: string;             
  VERSION_NO!: string;                     
  SET_ID!: string;                         
  SET_DESC!: string;                       
  JOB_STREAM_XNO!: string;                 
  JOB_STREAM_LNO!: number;                       
  MENU_ID!: string;      
  FILETYPE!: string;                  
}                    
