import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { IgxToastComponent, VerticalAlignment } from '@infragistics/igniteui-angular';
import { map, tap } from 'rxjs';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Home - IgniteUI for Angular';
  @ViewChild('toast') toast!: IgxToastComponent;
  
  constructor(
  public router: Router,
  public elem: ElementRef,
  private http: HttpClient,
) {

}
  
  menuItemClicked(route: string) {
    console.log('menuItemClicked',route)
    this.router.navigate(['/' + route]);
}

public actionBarMenuItems: IactionBarItem[] = [
  {clickAction: this.action.bind(this), icon: 'view_list', caption: 'Home'},
  {clickAction: this.action.bind(this), icon: 'view_list', caption: 'Comp1'},
  {clickAction: this.action.bind(this), icon: 'view_list', caption: 'Comp2'},

  {clickAction: this.action.bind(this), icon: 'refresh', caption: 'GL Account Master', dividerAfter: true},
  {clickAction: this.action.bind(this), icon: 'playlist_add', caption: 'GL Account Codes List'},
  {clickAction: this.action.bind(this), icon: 'view_list', caption: 'Reports Archive'},
  {clickAction: this.action.bind(this), icon: 'create', caption: 'Vendor Invoice Register'},
  // {clickAction: this.action.bind(this), icon: 'save_alt', caption: 'Save'},
  // {clickAction: this.action.bind(this), icon: 'system_update_alt', caption: 'Update'},
  // {clickAction: this.action.bind(this), icon: 'cancel', caption: 'Cancel'},
  // {clickAction: this.action.bind(this), icon: 'delete', caption: 'Delete'},
  // {clickAction: this.action.bind(this), icon: 'clear_all', caption: 'Done'},
  // {clickAction: this.action.bind(this), icon: 'help', caption: 'Help'},
  // {clickAction: this.action.bind(this), icon: 'handyman', caption: 'Issues'},
];

public position = VerticalAlignment;

  openToast(toast: IgxToastComponent, pos: VerticalAlignment) {
    console.log('opening toast', this.toast)
      toast.positionSettings.verticalDirection = pos;
      toast.open();
  }
  


  clickToast() {
    // alert('made it')
    this.toast.close()
  }

  
  async action(key:string) {
    console.log('actionItem = ', key, this)

    let actionkey = key;

    switch (actionkey) {

      case 'Refresh':
        break;

      case 'Home':
        this.menuItemClicked('home')
        break;

      case 'Comp1':
        this.menuItemClicked('comp1')
        break;

      case 'Comp2':
        this.menuItemClicked('comp2')
        break;

      case 'GL Account Master':
        this.menuItemClicked('gltacct1')
        break;

      case 'GL Account Codes List':
        this.menuItemClicked('glrlist1')
        break;


      case 'Reports Archive':
        this.menuItemClicked('asfsprf1')
        break;

      case 'Vendor Invoice Register':
        this.menuItemClicked('aprinvr1')
        break;

      case 'Help':
        window.open("https://absapi.absolution1.com/MyStaticFiles/index.html", "_blank"); // Open new tab
        // window.open("https://www.google.com", "_blank"); // Open new tab
        // window.open(document.URL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes'); // Open new window
        break;
    }

  }

  
  printReportTest(cb: any) {
    setTimeout(() => {
      this.openToast(this.toast, this.position.Top )
      
      let ASTSPRF1s = [
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
          "MENU_ITEM_OBJECT": "GLRLIST1",
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
          "MENU_ITEM_OBJECT": "GLRLIST1",
          "MENU_ITEM_TYPE": "R",
          "MENU_ITEM_SECURITY": "",
          "VERSION_NO": "",
          "SET_ID": "",
          "SET_DESC": "",
          "JOB_STREAM_XNO": "",
          "JOB_STREAM_LNO": 1,
          "MENU_ID": "BSE",
          "FILETYPE": "PDF"
      }
    ]

    console.log(ASTSPRF1s)
    console.log({ASTSPRF1s})
    
      cb(ASTSPRF1s);
 

    }, 4000)
  }

  async printReport(
    FOPM_NAME: string,
    body: any
    ) {

    // const body = {TABLE_NAME, SCHEMA_NAME, where_clause, order_by: ''};

    console.log('printReport', FOPM_NAME, body);

    let urlBaseABS = "http://localhost:1447/api/"

    let url = urlBaseABS + 'GL/' +  FOPM_NAME // + "_Report"

    console.log('printReport', url);

    let ob = this.http.post(url, body)
    .pipe(
      tap((res: any) => {
        // console.log('tap from GetRecord', {res})

      }),
      // map((res: any) => res['data'],
      map((res: any) => {
        this.openToast(this.toast, this.position.Top )
        console.log('returning result',  res )
      })
    )
    ob.subscribe((next) => {
      console.log('returning next',  next )
    })
}

}

 export interface IactionBarItem {
  clickAction: any;
  icon: string;
  caption: string;
  hidden?: boolean;
  dividerAfter?: boolean;
  dividerBefore?: boolean;
  showFab?: boolean;
}
