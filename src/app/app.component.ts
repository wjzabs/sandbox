import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { IgxToastComponent, VerticalAlignment } from '@infragistics/igniteui-angular';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Home - IgniteUI for Angular';
  @ViewChild('toast') toast!: IgxToastComponent;
  
  constructor(
  public router: Router,
  public elem: ElementRef,
  private http: HttpClient,
) {

}
  
ngOnInit(): void {

  localStorage.removeItem('session');
  localStorage.removeItem('JWT');

  let ob = this.authenticateUser({USER_ID: 'wjz', USER_PASSWORD: 'office', REMEMBER_ME: true})
  console.log('authenticateUser')
  ob.subscribe((next:any) => {
    console.log('authenticated', next)
  })
}
  
authenticateUser(user: {
  USER_ID: string;
  USER_PASSWORD: string;
  REMEMBER_ME: boolean
}) {
  // return this.http.post<any>(this.loginUrl, user);
  let loginUrl = environment.urlBaseABS + 'AS/login';

  let JWT = localStorage.getItem('JWT');
  // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + JWT);
  // const headers = new HttpHeaders().set('Content-Type', 'application/json');
  // let headers = new HttpHeaders().set('Content-Type', 'application/json');
  let headerItems = {} // { 'Content-Type': 'application/json' }

  if (JWT) {
    headerItems = { ...headerItems, Authorization: 'Bearer ' + JWT }
    console.log('including JWT')
  } else {
    headerItems = { 'Content-Type': 'application/json' }
    console.log('excluding JWT')
    }

  let headers = new HttpHeaders(headerItems);


let options = { headers: headers };

  // { headers: {'Content-Type': 'application/json'} }

  console.log(loginUrl)
  console.log(headers)
  // return this.http.post<any>(loginUrl, user, { headers })
  // return this.http.post<any>(loginUrl, user, { headers: {'Content-Type': 'application/json'} })
  return this.http.post<any>(loginUrl, user, options)
  .pipe(
    map(u => {
      // console.log('pipe', u)
    this.storeAuthResponse(u);
    return u;
    }),
    // catchError(this.handleError)
    catchError((err:any, caught: Observable<any>) => {
      console.log('error in authenticateUser. Details: ' + err)
      // throw 'error in authenticateUser. Details: ' + err;
      return throwError(err)
    })
  );
}



storeAuthResponse(sessionUser: any, navigate = true) {
  try {
    // this.session = sessionUser;
    // this.buildUserObject(this.session, true);
    localStorage.setItem('session', JSON.stringify(sessionUser));
    localStorage.setItem('JWT', sessionUser.BearerToken);
    // console.log('sessionUser.BearerToken', sessionUser.BearerToken)
    // if (navigate) {
    //   this.router.navigate(['abs', 'dashboard'])
    // }
  }
  catch (err) {
    throw(err);
  }
}


private handleError(error: HttpErrorResponse) {
  console.log({error})
  let errorMessage = 'Unknown error!';
  if (error.error instanceof ErrorEvent) {
    // Client-side errors
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side errors
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
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
  {clickAction: this.action.bind(this), icon: 'picture_as_pdf', caption: 'PDF Viewer'},
  {clickAction: this.action.bind(this), icon: 'article', caption: 'XLS Viewer'},
  {clickAction: this.action.bind(this), icon: 'system_update_alt', caption: 'Signalr'},
  {clickAction: this.action.bind(this), icon: 'auto_awesome', caption: 'Item Status'},
  {clickAction: this.action.bind(this), icon: 'abc', caption: 'ABC Parameters'},
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
      case 'PDF Viewer':
        this.menuItemClicked('pdfviewer')
        break;
      case 'XLS Viewer':
        this.menuItemClicked('xlsviewer')
        break;
      case "Signalr":
        this.menuItemClicked('Signalr')
        break;
      case "Item Status":
        this.menuItemClicked('icfstat1')
        break;
      case "ABC Parameters":
        this.menuItemClicked('dptabcp1')
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
          "MENU_ITEM_OBJECT": "GLRLIST1",
          "MENU_ITEM_TYPE": "R",
          "MENU_ITEM_SECURITY": "",
          "VERSION_NO": "",
          "SET_ID": "",
          "SET_DESC": "",
          "JOB_STREAM_XNO": "",
          "JOB_STREAM_LNO": 1,
          "MENU_ID": "BSE",
          "FILETYPE": "XLS"
      }
    ]

    console.log(ASTSPRF1s)
    console.log({ASTSPRF1s})

      cb(ASTSPRF1s);
 

    }, 4000)
  }

  async printReport(
    FOPM_NAME: string,
    body: any,
    cb: any
    ) {

    // const body = {TABLE_NAME, SCHEMA_NAME, where_clause, order_by: ''};
      
    console.log('printReport', FOPM_NAME, body);

    let urlBaseABS = environment.urlBaseABS //  "http://localhost:1977/api/"

    // let url = urlBaseABS + 'GL/' +  FOPM_NAME // + "_Report"
    let url = urlBaseABS + 'AS/ReportRequest'

    console.log('printReport', url);

    let options = { headers: this.getheaders() };

    let ob = this.http.post(url, body, options)

    // .pipe(
    //   tap((res: any) => {
    //     console.log('tap from printReport', {res})
    //   }),
    //   // map((res: any) => res['data'],
    //   map((res: any) => {
    //     console.log('returning result',  res )
    //     return res;
    //   })
    // )

    // SUBSCRIBE IS USUALLY DONE IN THE CALLING COMPONENT
    ob.subscribe((next) => {
      console.log('returning next',  next )
      // this.openToast(this.toast, this.position.Top )
      if (cb) {
        cb(next);
      }
    })
    // ,(err) => {console.log('http error ' +err)}
    // ,() => {console.log('http complete')})
}



async checkReportStatus(SVC_REQ_NO: string, processResult: any) {

  const body = {SVC_REQ_NO};

  console.log('checkReportStatus', body);

  let urlBaseABS = environment.urlBaseABS // "http://localhost:1977/api/"

  // let url = urlBaseABS + 'GL/' +  FOPM_NAME // + "_Report"
  let url = urlBaseABS + 'AS/CheckReportStatus'

  console.log('checkReportStatus', {url});

  let ob = this.http.post(url, body)
  .pipe(
    tap((res: any) => {
      console.log('tap from checkReportStatus', {res})

    }),
    // map((res: any) => res['data'],
    map((res: any) => {
      console.log('returning result',  res )
      return res;
    })
  )
  ob.subscribe((next) => {
    console.log('returning next CheckReportStatus',  next )
    this.openToast(this.toast, this.position.Top )
    if (processResult) {
      processResult(next)
    }
  })
}




async updateReport(
  FOPM_NAME: string,
  body: any,
  cb: any
  ) {

  console.log('updateReport', FOPM_NAME, body);

  let urlBaseABS = environment.urlBaseABS //  "http://localhost:1977/api/"
  let url = urlBaseABS + 'AS/ReportUpdate'

  console.log('updateReport', url);

  let options = { headers: this.getheaders() };

  let ob = this.http.post(url, body, options)
  ob.subscribe((next) => {
    console.log('returning next',  next )
    if (cb) {
      cb(next);
    }
  })
}

getheaders(): {} {
  let JWT = localStorage.getItem('JWT');
  let headerItems = {}  
  if (JWT) {
    headerItems = { ...headerItems, Authorization: 'Bearer ' + JWT }
    console.log('including JWT')
  } else {
    headerItems = { 'Content-Type': 'application/json' }
    console.log('excluding JWT')
    }
    let headers = new HttpHeaders(headerItems); 
    
    return headers
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
