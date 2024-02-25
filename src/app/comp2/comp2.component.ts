import { useAnimation } from '@angular/animations';
import { Component, Input, ViewChild } from '@angular/core';
import { CloseScrollStrategy, GlobalPositionStrategy, GridColumnDataType, IgxDialogComponent, IgxOverlayOutletDirective, PositionSettings } from '@infragistics/igniteui-angular';
import { slideInBottom, slideOutTop } from '@infragistics/igniteui-angular/animations';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {

  public taskTitle = 'mow the lawn';
  // @Input() public title: string = '';
  public title = 'Embedded Component';
  
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
  this.taskTitle = '';
}
 


@ViewChild(IgxOverlayOutletDirective, { static: true })
public outlet!: IgxOverlayOutletDirective;

@ViewChild('embedded', { read: IgxDialogComponent, static: true })
public dialog!: IgxDialogComponent;

private _animaitonSettings: PositionSettings = {
    openAnimation: useAnimation(slideInBottom, { params: { fromPosition: 'translateY(100%)' } }),
    closeAnimation: useAnimation(slideOutTop, { params: { toPosition: 'translateY(-100%)' } })
};

private _dialogOverlaySettings2: any;

public openDialog() {
    this._dialogOverlaySettings2.outlet = this.outlet;
    this.dialog.open(this._dialogOverlaySettings2);
}

public ngOnInit() {
    this._dialogOverlaySettings2 = {
        modal: true,
        outlet: this.outlet,
        scrollStrategy: new CloseScrollStrategy(),
        positionStrategy: new GlobalPositionStrategy(this._animaitonSettings)
    };
}
}
