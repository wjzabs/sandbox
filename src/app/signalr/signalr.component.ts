import { Component, OnInit } from '@angular/core';
import { SignalrService } from '../signalr.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-signalr',
  templateUrl: './signalr.component.html',
  styleUrls: ['./signalr.component.scss']
})
export class SignalrComponent implements OnInit {

  hubHelloMessage?: string;
  hubHelloMessageJSON?: any;
  hubReportStatusMessageJSON?: any;
  progressPercentage!: number;
  progressMessage?: string;
  processing?: boolean;

  constructor(
    public signalrService: SignalrService,
    public appComponent: AppComponent
    ) { }

  ngOnInit(): void {
    this.signalrService.connection
      .invoke('Hello')
      .catch((error: any) => {
        console.log(`SignalrHub.Hello() error: ${error.toString()}`);
        alert('SignalrHub.Hello() error!, see console for details.');
      });

    this.signalrService.hubHelloMessage.subscribe((hubHelloMessage: string) => {
      this.hubHelloMessage = hubHelloMessage;
    });

    this.signalrService.hubHelloMessageJSON.subscribe((hubHelloMessageJSON: any) => {
      this.hubHelloMessageJSON = hubHelloMessageJSON;
    });

    this.signalrService.hubReportStatusMessageJSON.subscribe((hubReportStatusMessageJSON: any) => {
      this.hubReportStatusMessageJSON = hubReportStatusMessageJSON;
    });

    this.signalrService.progressPercentage.subscribe((progressPercentage: number) => {
      this.progressPercentage = progressPercentage;
    });

    this.signalrService.progressMessage.subscribe((progressMessage: string) => {
      this.progressMessage = progressMessage;
    });
  }

  public processData(): void {
    this.processing = true;
    this.progressPercentage = 0;
    this.progressMessage = "";

    this.signalrService.connection
      .invoke('SimulateDataProcessing')
      .then(() => {
        this.processing = false;
      })
      .catch((error: any) => {
        console.log(`SignalrDemoHub.SimulateDataProcessing() error: ${error}`);
        alert('SignalrDemoHub.SimulateDataProcessing() error!, see console for details.');
      });
  }

  checkReportStatus(SVC_EXE_NO: string) {
    this.appComponent.checkReportStatus(SVC_EXE_NO, this.processResult.bind(this))
  }

  public processResult(data: any) {
    // this.setASTSPRF1s = data;
    console.log({data})
  }



  checkReportStatus2(SVC_EXE_NO: string) {
    this.signalrService.connection
    .invoke('Hello2',SVC_EXE_NO)
    .catch((error: any) => {
      console.log(`SignalrHub.Hello() error: ${error.toString()}`);
      alert('SignalrHub.Hello() error!, see console for details.');
    });
  }
}
