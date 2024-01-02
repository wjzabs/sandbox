import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ConnectedPositioningStrategy, GridColumnDataType, IgxDropDownComponent, IgxInputGroupComponent } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-icfstat1',
  templateUrl: './icfstat1.component.html',
  styleUrls: ['./icfstat1.component.scss']
})
export class Icfstat1Component implements OnInit, OnChanges {

  public ICTITEM1: ICTITEM1 = new ICTITEM1();
  // public items: string[] = ['Asset', 'Liability', 'Equity', 'Income', 'Expense'];
  public ICTPCAT1: ICTPCAT1 = new ICTPCAT1();

  @ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown!: IgxDropDownComponent;
  @ViewChild('inputGroup', { read: IgxInputGroupComponent, static: true }) public inputGroup!: IgxInputGroupComponent;

  public checkboxValue = false;

  public ITEM_STATUSs: { T_CODE: string; T_DESC: string }[] = [
    { T_CODE: 'A', T_DESC: 'Active' },
    { T_CODE: 'I', T_DESC: 'Inactive' },
  ];
  

  public ICTSTATXs: ICTSTATX[] =  [
    {
      "WHSE_CODE": "003",
      "WHSE_QTY_BEG": 100,
      "WHSE_QTY_SHP": 10,
      "WHSE_QTY_ON_HAND": 90,
    },
    {
      "WHSE_CODE": "013",
      "WHSE_QTY_BEG": 100,
      "WHSE_QTY_SHP": 10,
      "WHSE_QTY_ON_HAND": 90,
    },
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
    COLUMN_KEY: 'WHSE_CODE',
    COLUMN_HEADER: 'Whse',
    COLUMN_WIDTH: '10%',
    COLUMN_MASK: '',
    DATA_TYPE: 'V',
    COLUMN_TYPE: GridColumnDataType.String,
    COLUMN_CLASSES: 'grd-column col-string',
    COLUMN_EDITABLE: false,
  },
  { 
    COLUMN_KEY: 'WHSE_QTY_BEG',
    COLUMN_HEADER: 'Beg',
    COLUMN_WIDTH: '12%',
    COLUMN_MASK: '',
    DATA_TYPE: 'N',
    COLUMN_TYPE: GridColumnDataType.Number,
    COLUMN_CLASSES: 'grd-column col-number',
    COLUMN_EDITABLE: false,
  },
  { 
    COLUMN_KEY: 'WHSE_QTY_SHP',
    COLUMN_HEADER: 'Shp',
    COLUMN_WIDTH: '12%',
    COLUMN_MASK: '',
    DATA_TYPE: 'N',
    COLUMN_TYPE: GridColumnDataType.Number,
    COLUMN_CLASSES: 'grd-column col-number',
    COLUMN_EDITABLE: false,
  },
  { 
    COLUMN_KEY: 'WHSE_QTY_ON_HAND',
    COLUMN_HEADER: 'OnH',
    COLUMN_WIDTH: '12%',
    COLUMN_MASK: '',
    DATA_TYPE: 'N',
    COLUMN_TYPE: GridColumnDataType.Number,
    COLUMN_CLASSES: 'grd-column col-number',
    COLUMN_EDITABLE: false,
  },
]


  public openDropDown() {
      if (this.igxDropDown.collapsed) {
          this.igxDropDown.open({
              target: this.inputGroup.element.nativeElement,
              modal: false,
              positionStrategy: new ConnectedPositioningStrategy()
          });
      }
  }

  public onChangeRadio(event:any) {
    console.log(event)
    console.log(this.ICTITEM1)
  }

  ngOnInit(): void {

  }
  
  ngOnChanges(changes: SimpleChanges) {

}

  changeData(value2: boolean) {
    console.log('value', value2)
    const value = (value2 ? '1' : '0');
    this.ICTITEM1['ITEM_COATED'] = value;
  }

  onChange(COLUMN_NAME: string) {

    console.log('onChange: ', COLUMN_NAME, this.ICTITEM1.PRICE_CATGY_CODE)

    if (COLUMN_NAME == 'PRICE_CATGY_CODE') {
      if (this.ICTITEM1.PRICE_CATGY_CODE) {
        this.ICTPCAT1.PRICE_CATGY_DESC = 'Price Category ' + this.ICTITEM1.PRICE_CATGY_CODE
      } else {
        this.ICTPCAT1.PRICE_CATGY_DESC = 'x'
      }
    }
  }
}

export class ICTSTATX {                   
  WHSE_CODE!: string;                      
  WHSE_QTY_BEG!: number;                    
  WHSE_QTY_SHP!: number;
  WHSE_QTY_ON_HAND!: number;          
}

export class ICTPCAT1 {                   
  PRICE_CATGY_CODE!: string;                      
  PRICE_CATGY_STATUS!: string;                    
  PRICE_CATGY_DESC!: string;      
}

export class ICTITEM1 {                   
  ITEM_CODE!: string;                      
  ITEM_STATUS!: string;                    
  ITEM_DESC!: string;                      
  ITEM_UPC_CODE: string = '';                  
  PRICE_CATGY_CODE!: string;               
  ITEM_UOM!: string;                       
  ITEM_DESC2!: string;                     
  ITEM_STATUS_DATE!: Date;                 
  INIT_OPER!: string;                      
  LAST_OPER!: string;                      
  INIT_DATE!: Date;                        
  LAST_DATE!: Date;                        
  ITEM_BIN!: string;                       
  ITEM_BASE_CURVE!: number;                      
  ITEM_SPHERE_POWER!: number;                    
  ITEM_ADD_POWER!: string;                 
  ITEM_CYLINDER!: number;                        
  ITEM_DIAMETER!: number;                        
  ITEM_LEFT_RIGHT!: string;                
  ITEM_CENTER_THICKNESS!: number;                
  ITEM_MIN_QTY!: number;                         
  ITEM_MAX_QTY!: number;                         
  ITEM_AXIS!: number;                            
  ITEM_BLANK_SIZE!: number;                      
  ITEM_COLOR!: string;                     
  ITEM_ORDER_CODE!: string;                
  ITEM_OPC_CODE!: string;                  
  PO_UOM!: string;                         
  PO_UOM_CONV_FACTOR!: number;                   
  VEND_PROD_CLASS!: string;                
  ITEM_INDEX_REF!: number;                       
  ITEM_OZD!: number;                             
  ITEM_NOTE!: string;                      
  ITEM_ADD_DOM_NON!: string;               
  ITEM_COATED!: string;                    
  ITEM_EAN_CODE!: string;                  
}    
