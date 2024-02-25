import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ConnectedPositioningStrategy, IgxDialogComponent, IgxDropDownComponent, IgxInputGroupComponent, IgxToastComponent } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-dptabcp1',
  templateUrl: './dptabcp1.component.html',
  styleUrls: ['./dptabcp1.component.scss']
})
export class Dptabcp1Component implements OnInit, OnChanges {

  public DPTABCP1: DPTABCP1 = new DPTABCP1();
  // public items: string[] = ['Asset', 'Liability', 'Equity', 'Income', 'Expense'];

  @ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown!: IgxDropDownComponent;
  @ViewChild('inputGroup', { read: IgxInputGroupComponent, static: true }) public inputGroup!: IgxInputGroupComponent;
  @ViewChild('toast', { static: true }) public toast!: IgxToastComponent;
  @ViewChild('alert', { static: true }) public alert!: IgxDialogComponent;

  public checkboxValue = false;
  public error_message = "";

  // public ACCT_TYPEs: { T_CODE: string; T_DESC: string }[] = [
  //     { T_CODE: 'A', T_DESC: 'Asset' },
  //     { T_CODE: 'L', T_DESC: 'Liability' },
  //     { T_CODE: 'E', T_DESC: 'Equity' },
  //     { T_CODE: 'I', T_DESC: 'Income' },
  //     { T_CODE: 'X', T_DESC: 'Expense' },
  // ];

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
    console.log(this.DPTABCP1)
  }

  ngOnInit(): void {
    // let inputValue = this.GLTACCT1['ACCT_SUB_CTL'];

    // if (inputValue && inputValue !== '0') {
    //   this.checkboxValue = true;
    // } else {
    //   this.checkboxValue = false;
    // }
  }
  
  ngOnChanges(changes: SimpleChanges) {

    // let inputValue = this.GLTACCT1['ACCT_SUB_CTL'];

    // if (inputValue && inputValue !== '0') {
    //   this.checkboxValue = true;
    // } else {
    //   this.checkboxValue = false;
    // }
}

  changeData(value2: boolean) {
    console.log('value', value2)
    // const value = (value2 ? '1' : '0');
    // this.GLTACCT1['ACCT_SUB_CTL'] = value;
  }

  onChange(COLUMN_NAME: string, event: any) {
    console.log('onChange: ', COLUMN_NAME, this.DPTABCP1.ITEM_CLASS_CODE)
    console.log('Event: ', event?.srcElement?.value)

    if (COLUMN_NAME == 'ITEM_CLASS_CODE') {
      // let CODE_VALUE = this.DPTABCP1.ITEM_CLASS_CODE;
      let CODE_VALUE = event?.srcElement?.value
      if (CODE_VALUE) {
        this.DPTABCP1.ITEM_CLASS_DESC = 'Item Class ' + CODE_VALUE
      } else {
        this.DPTABCP1.ITEM_CLASS_DESC = 'x'
      }
    }
  }

  test() {
    this.DPTABCP1.ABC_MAX_POS = 99;
  }

  save() {

    if (this.DPTABCP1.ABC_MAX_POS < this.DPTABCP1.ABC_MIN_POS) {

      this.error_message = "Minimum Position may not be greater than Maximum Position"

      console.log( this.error_message)
      this.toast.open()

      this.alert.open()

    }
  }
}

export class DPTABCP1 {
  ABC_CODE!: string;                       
  ABC_DESC!: string;                       
  ABC_MAX_POS!: number;                          
  ABC_MIN_POS!: number;                          
  ABC_PCT_RANGE!: number;                        
  ABC_MIN_DAYS_SUPPLY!: number;     
  ITEM_CLASS_CODE!: string;
  ITEM_CLASS_DESC!: string;    
}
