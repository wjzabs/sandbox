import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GridColumnDataType } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-asfsprfg',
  templateUrl: './asfsprfg.component.html',
  styleUrls: ['./asfsprfg.component.scss']
})
export class AsfsprfgComponent {

  
  // public ASTSPRF1s: ASTSPRF1[] =  []

  @Input() TITLE: string = '';
  @Input() ASTSPRF1s: ASTSPRF1[] =  [];
  @Output() special = new EventEmitter<any>;
  @Output() TITLEChange = new EventEmitter<string>();

datacolumnsRPT = [

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
    COLUMN_EDITABLE: true,
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


  getReport(cell:any) {
    console.log('getReport', cell);
    window.open('https://absapi.absolution1.com/MyStaticFiles/index.html')
    // alert(cell._row._data.RPT_TITLE)

    this.TITLE = 'AP List'
    this.TITLEChange.emit(this.TITLE);
    
    this.special.emit({firstname: 'walter', lastname: 'z', TITLE: this.TITLE})

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
