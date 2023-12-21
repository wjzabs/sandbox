import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xls-viewer',
  templateUrl: './xls-viewer.component.html',
  styleUrls: ['./xls-viewer.component.scss']
})
export class XlsViewerComponent implements OnInit{
  public innerWidth: any;
  public innerHeight: any;
  ngOnInit() {
      this.innerWidth = window.innerWidth;
      this.innerHeight = (window.innerHeight - 65);
  }
  
}
