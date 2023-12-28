import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GridColumnDataType, IgxGridComponent, IgxTabsComponent, IgxToastComponent, VerticalAlignment } from '@infragistics/igniteui-angular';
import { AppComponent } from '../app.component';
import { SignalrService } from '../signalr.service';

@Component({
  selector: 'app-glrlist1',
  templateUrl: './glrlist1.component.html',
  styleUrls: ['./glrlist1.component.scss']
})
export class Glrlist1Component implements OnInit, AfterViewInit {
  
  // hubReportStatusMessageJSON?: any;

  public SVC_REQ_NO: string = '';

  public ASTSPRF1s: ASTSPRF1[] =  []
  public ASTWSVC1s: ASTWSVC1[] =  []
  public selectedRows: any[] = [];

  public TITLE2!: string;
  @ViewChild('tabMain') tabMain!: IgxTabsComponent
  @ViewChild('gridASTWSVC1s') gridASTWSVC1s!: IgxGridComponent

  public GLRLIST1: GLRLIST1 = new GLRLIST1();
  public GLTPARM1: GLTPARM1 = new GLTPARM1();

  public ASTDSQLAs: ASTDSQLA[] = [
    { FORM_NAME: 'GLRLIST1', COLUMN_NAME: 'ACCT_CODE', COLUMN_CAPTION: 'Account', SORTABLE: '0', COLUMN_LAST: '', VIEW_NAME: 'ACCT_CODE', COLUMN_SEQ: '', PAGE_EJECT: '0', EXCL_CODES: '0', CODE_VALUES: '' },
    { FORM_NAME: 'GLRLIST1', COLUMN_NAME: 'SEG2_CODE', COLUMN_CAPTION: this.GLTPARM1['GL_PARM_SEG2_DESC'], SORTABLE: '0', COLUMN_LAST: '0', VIEW_NAME: 'SEG2_CODE', COLUMN_SEQ: '', PAGE_EJECT: '0', EXCL_CODES: '0', CODE_VALUES: '' },
    { FORM_NAME: 'GLRLIST1', COLUMN_NAME: 'SEG3_CODE', COLUMN_CAPTION: this.GLTPARM1['GL_PARM_SEG3_DESC'], SORTABLE: '0', COLUMN_LAST: '0', VIEW_NAME: 'SEG3_CODE', COLUMN_SEQ: '', PAGE_EJECT: '0', EXCL_CODES: '0', CODE_VALUES: '' },
    { FORM_NAME: 'GLRLIST1', COLUMN_NAME: 'SEG4_CODE', COLUMN_CAPTION: this.GLTPARM1['GL_PARM_SEG4_DESC'], SORTABLE: '0', COLUMN_LAST: '0', VIEW_NAME: 'SEG4_CODE', COLUMN_SEQ: '', PAGE_EJECT: '0', EXCL_CODES: '0', CODE_VALUES: '' },
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
    if (COLUMN_NAME == 'ACCT_CODES') {this.GLRLIST1['ACCT_CODES'] = value}
    if (COLUMN_NAME == 'SEG2_CODES') {this.GLRLIST1['SEG2_CODES'] = value}
    if (COLUMN_NAME == 'SEG3_CODES') {this.GLRLIST1['SEG3_CODES'] = value}
    if (COLUMN_NAME == 'SEG4_CODES') {this.GLRLIST1['SEG4_CODES'] = value}
    // this.GLRLIST1[COLUMN_NAME] = value;
    // this.GLRLIST1['ACCT_CODES'] = value;
  }

constructor(
  public appComponent: AppComponent,
  public signalrService: SignalrService
  ) {}

  ngOnInit(): void {
    // this.TITLE = 'GL Report'

    
    this.signalrService.hubReportStatusMessageJSON.subscribe((hubReportStatusMessageJSON: any) => {
      // this.hubReportStatusMessageJSON = hubReportStatusMessageJSON;
      console.log(hubReportStatusMessageJSON)
      this.ASTWSVC1s = hubReportStatusMessageJSON["ASTWSVC1s"]
      // this.setASTSPRF1s(hubReportStatusMessageJSON["astsprF1s"])
      this.setASTSPRF1s(hubReportStatusMessageJSON["ASTSPRF1s"])
    });

    
    this.signalrService.RegisterReportResponse.subscribe((RegisterReportResponse: any) => {
      console.log('RegisterReportResponse returned as ', RegisterReportResponse)
    });
  }

  ngAfterViewInit(): void {
    this.TITLE2 = 'GL Report'
  }

  getReport(cell:any) {
    console.log('getReport', cell);
    window.open('https://absapi.absolution1.com/MyStaticFiles/index.html')
    // alert(cell._row._data.RPT_TITLE)
  }

  proceedTest() {
    console.log("Print Report")
    if (!(this.GLRLIST1.ACCT_CODES == '1' || this.GLRLIST1.SEG2_CODES == '1' || this.GLRLIST1.SEG3_CODES == '1' || this.GLRLIST1.SEG4_CODES == '1')) {
      alert("Nothing to Print")
      return
    }

    // unrem the following line if you want to get the mocked up version to work
    // this.appComponent.printReport(this.setASTSPRF1s.bind(this))
    console.log('done with proceed')

    // this.tabMain.selectedIndex = 1;
}

  setASTSPRF1s(A: ASTSPRF1[]) {

    console.log({A})
    console.log('this', this)
    this.ASTSPRF1s =A;
    console.log('this.ASTSPRF1s', this.ASTSPRF1s)
    this.tabMain.selectedIndex = 1;
  }
   
  special2(message: any) {
    console.log('inside special2 inside glrlist1', message)
    console.log('ASTSPRF1s inside glrlist1', this.ASTSPRF1s)
    console.log('TITLE inside gltlist1', this.TITLE2)
  }

  proceed() {
    console.log("Print Report")
    if (!(this.GLRLIST1.ACCT_CODES == '1' || this.GLRLIST1.SEG2_CODES == '1' || this.GLRLIST1.SEG3_CODES == '1' || this.GLRLIST1.SEG4_CODES == '1')) {
      alert("Nothing to Print")
      return
    }
   
    let body = {
      GLTPARM1: {
      GL_PARM_SEG2_DESC: 'Dept',
      GL_PARM_SEG3_DESC: 'TrCls',
      GL_PARM_SEG4_DESC: 'Collection',
  },
  ASTROPTX: {ACCT_CODE: '1', SEG2_CODE: '1', SEG3_CODE: '1', SEG4_CODE: '1'},
  
   ASTDSQLAs: [
      { FORM_NAME: 'GLRLIST1', COLUMN_NAME: 'ACCT_CODE', COLUMN_CAPTION: 'Account', SORTABLE: '0', COLUMN_LAST: '', VIEW_NAME: 'ACCT_CODE', COLUMN_SEQ: '', PAGE_EJECT: '0', EXCL_CODES: '0', CODE_VALUES: '' },
      { FORM_NAME: 'GLRLIST1', COLUMN_NAME: 'SEG2_CODE', COLUMN_CAPTION: 'Dept', SORTABLE: '0', COLUMN_LAST: '0', VIEW_NAME: 'SEG2_CODE', COLUMN_SEQ: '', PAGE_EJECT: '0', EXCL_CODES: '0', CODE_VALUES: '' },
      { FORM_NAME: 'GLRLIST1', COLUMN_NAME: 'SEG3_CODE', COLUMN_CAPTION: 'TrCls', SORTABLE: '0', COLUMN_LAST: '0', VIEW_NAME: 'SEG3_CODE', COLUMN_SEQ: '', PAGE_EJECT: '0', EXCL_CODES: '0', CODE_VALUES: '' },
      { FORM_NAME: 'GLRLIST1', COLUMN_NAME: 'SEG4_CODE', COLUMN_CAPTION: 'Collection', SORTABLE: '0', COLUMN_LAST: '0', VIEW_NAME: 'SEG4_CODE', COLUMN_SEQ: '', PAGE_EJECT: '0', EXCL_CODES: '0', CODE_VALUES: '' },
    ],
  
  FORM_NAME: 'GLRLIST1', 
  USER_ID: 'wjz',
  SESSION_NO: '0000001234'
  
  }


    this.appComponent.printReport('GLRLIST1', body, this.recordReportRequest.bind(this));
    // this.appComponent.printReport('GLRLIST1');
  }
  
  recordReportRequest(res:any) {
    this.ASTWSVC1s = res["ASTWSVC1s"]
    this.SVC_REQ_NO = res["SVC_REQ_NO"]

    console.log("in cb registering report", this.SVC_REQ_NO)

    this.signalrService.connection
    .invoke('RegisterReport',this.SVC_REQ_NO)
    .catch((error: any) => {
      console.log(`SignalrHub.Hello() error: ${error.toString()}`);
      alert('SignalrHub.Hello() error!, see console for details.');
    });

  }

  checkReportStatus() {
    console.log('selectedRows: ', this.selectedRows)
    this.appComponent.checkReportStatus(this.SVC_REQ_NO, this.processResult.bind(this))
  }

  public processResult(data: any) {
    // this.gridASTWSVC1s.curr
    this.ASTWSVC1s = data["ASTWSVC1s"]
    this.setASTSPRF1s(data["ASTSPRF1s"])
  }

  checkReportStatus2() {
    this.signalrService.connection
    .invoke('Hello2',this.SVC_REQ_NO, false)
    .catch((error: any) => {
      console.log(`SignalrHub.Hello() error: ${error.toString()}`);
      alert('SignalrHub.Hello() error!, see console for details.');
    });
  }
  
  newSelectionEvent(event: any) {
    console.log({event})
  }

}

export class GLRLIST1 {
  ACCT_CODES!: string;
  SEG2_CODES: string = '0';
  SEG3_CODES!: string;
  SEG4_CODES!: string;
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

export class ASTWSVC1 {                   
  SVC_REQ_NO!: string;                     
  REPORT_NAME!: string;                    
  DATASET_LOCATION!: string;               
  REPORT_EXPORT_FORMAT!: string;           
  REPORT_EXPORT_FILENAME!: string;         
  DATE_REQUESTED!: Date;                   
  DATE_STARTED!: Date;                     
  DATE_COMPLETED!: Date;                   
  SVC_REQ_STATUS!: string;                 
  SVC_REQ_KEY!: string;                    
}                    