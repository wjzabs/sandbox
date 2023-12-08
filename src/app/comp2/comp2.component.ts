import { Component } from '@angular/core';
import { GridColumnDataType } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {

  public taskTitle = 'mow the lawn';

btnClick(){
  console.log('button clicked')
}

data: any[] = [
  {issue_no: 1, issue_title: 'review modal interface'},
  {issue_no: 2, issue_title: 'user feature request'},
  {issue_no: 3, issue_title: 'hook up help system'},
];

datacolumns = [
  { field: 'issue_no', header: '#'},
  { field: 'issue_title', header: 'Issue'},
];

addTask() {

  let issue_count = this.data.length
this.data.push({issue_no: issue_count + 1, issue_title: this.taskTitle})
}

clearTask() {

}
 

}
