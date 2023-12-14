import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ConnectedPositioningStrategy, IgxDropDownComponent, IgxInputGroupComponent } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-gltacct1',
  templateUrl: './gltacct1.component.html',
  styleUrls: ['./gltacct1.component.scss']
})
export class Gltacct1Component implements OnInit, OnChanges {

  public GLTACCT1: GLTACCT1 = new GLTACCT1();
  // public items: string[] = ['Asset', 'Liability', 'Equity', 'Income', 'Expense'];

  @ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown!: IgxDropDownComponent;
  @ViewChild('inputGroup', { read: IgxInputGroupComponent, static: true }) public inputGroup!: IgxInputGroupComponent;

  public checkboxValue = false;

  public ACCT_TYPEs: { T_CODE: string; T_DESC: string }[] = [
      { T_CODE: 'A', T_DESC: 'Asset' },
      { T_CODE: 'L', T_DESC: 'Liability' },
      { T_CODE: 'E', T_DESC: 'Equity' },
      { T_CODE: 'I', T_DESC: 'Income' },
      { T_CODE: 'X', T_DESC: 'Expense' },
  ];

  public ACCT_DR_CR_INDs: { T_CODE: string; T_DESC: string }[] = [
    { T_CODE: 'D', T_DESC: 'DR' },
    { T_CODE: 'C', T_DESC: 'CR' },
  ];

  public ACCT_STATUSs: { T_CODE: string; T_DESC: string }[] = [
    { T_CODE: 'A', T_DESC: 'Active' },
    { T_CODE: 'I', T_DESC: 'Inactive' },
  ];
  

  public ACCT_SEG_MANDs: { T_CODE: string; T_DESC: string }[] = [
    { T_CODE: '0', T_DESC: 'Must Use Default' },
    { T_CODE: '1', T_DESC: 'May NOT use Default' },
    { T_CODE: '2', T_DESC: 'May Use Any Value' },
  ];


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
    console.log(this.GLTACCT1)
  }

  ngOnInit(): void {
    let inputValue = this.GLTACCT1['ACCT_SUB_CTL'];

    if (inputValue && inputValue !== '0') {
      this.checkboxValue = true;
    } else {
      this.checkboxValue = false;
    }
  }
  
  ngOnChanges(changes: SimpleChanges) {

    let inputValue = this.GLTACCT1['ACCT_SUB_CTL'];

    if (inputValue && inputValue !== '0') {
      this.checkboxValue = true;
    } else {
      this.checkboxValue = false;
    }
}

  changeData(value2: boolean) {
    console.log('value', value2)
    const value = (value2 ? '1' : '0');
    this.GLTACCT1['ACCT_SUB_CTL'] = value;
  }

  onChange(COLUMN_NAME: string) {

    console.log('onChange: ', COLUMN_NAME, this.GLTACCT1.ACCT_CLASS_CODE)

    if (COLUMN_NAME == 'ACCT_CLASS_CODE') {
      if (this.GLTACCT1.ACCT_CLASS_CODE) {
        this.GLTACCT1.ACCT_CLASS_DESC = 'Account Class ' + this.GLTACCT1.ACCT_CLASS_CODE
      } else {
        this.GLTACCT1.ACCT_CLASS_DESC = 'x'
      }

    }

  }
}

export class GLTACCT1 {
  ACCT_CODE!: string;
  ACCT_STATUS!: string;
  ACCT_DESC: string = 'Cash';
  ACCT_TYPE!: string;
  ACCT_RATIO_CODE!: string;
  ACCT_DR_CR_IND!: string;
  INIT_OPER!: string;
  LAST_OPER!: string;
  INIT_DATE!: string;
  LAST_DATE!: string;
  ACCT_SEG2_MAND: string = '0';
  ACCT_SEG3_MAND!: string;
  ACCT_SEG4_MAND!: string;
  ACCT_SUB_CTL: string = '1';
  ACCT_CLASS_CODE!: string;
  ACCT_POST_SUMMARY!: string;

  ACCT_CLASS_DESC!: string;
}
