import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component {
  public taskTitle = 'do the dishes';
  @Input() public data: any[] = [];
  @Input() public datacolumns: any[] = [];


  
addTask() {

  let issue_count = this.data.length
this.data.push({issue_no: issue_count + 1, issue_title: this.taskTitle})
}

clearTask() {
  this.taskTitle = '';
}
 
}
