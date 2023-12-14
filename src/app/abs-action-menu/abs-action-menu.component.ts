import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ConnectedPositioningStrategy, HorizontalAlignment, ISelectionEventArgs, NoOpScrollStrategy, VerticalAlignment } from '@infragistics/igniteui-angular';

export interface actionBarMenuItem {
  hidden?: boolean;
  caption?: string;
  dividerBefore?: boolean;
  dividerAfter?: boolean;
  icon?: string;
  clickAction?: any;
  showFab?: boolean;
}
@Component({
  selector: 'abs-action-menu',
  templateUrl: './abs-action-menu.component.html',
  styleUrls: ['./abs-action-menu.component.scss']
})
export class AbsActionMenuComponent implements OnInit {

  @Input() public actionBarMenuItems: actionBarMenuItem[] = [];
  
  constructor() { }

  ngOnInit(): void {
    console.log('actionBarMenuItems: ', this.actionBarMenuItems)
  }

  openMenu() {
    console.log('this.trigger.openMenu();')
    // this.trigger.openMenu();
  }

  public onSelection(eventArgs: ISelectionEventArgs) {
    console.log('onSelection: ', eventArgs.newSelection.value)
    // eventArgs.cancel = true;
}

public overlaySettings = {
  positionStrategy: new ConnectedPositioningStrategy({
      horizontalDirection: HorizontalAlignment.Left,
      horizontalStartPoint: HorizontalAlignment.Right,
      verticalStartPoint: VerticalAlignment.Bottom
  }),
  scrollStrategy: new NoOpScrollStrategy()
};

}
