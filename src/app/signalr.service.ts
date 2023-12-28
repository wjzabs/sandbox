import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root',
})
export class SignalrService {
  connection: any;
  hubHelloMessage: BehaviorSubject<string>;
  hubHelloMessageJSON!: BehaviorSubject<any>;
  hubReportStatusMessageJSON!: BehaviorSubject<any>;
  RegisterReportResponse!: BehaviorSubject<any>;
  progressPercentage: BehaviorSubject<number>;
  progressMessage: BehaviorSubject<string>;

  constructor() {
    this.connection = null;
    this.hubHelloMessage = new BehaviorSubject<string>("");
    this.hubHelloMessageJSON = new BehaviorSubject<any>({});
    this.hubReportStatusMessageJSON = new BehaviorSubject<any>({});
    this.RegisterReportResponse = new BehaviorSubject<any>({});
    this.progressPercentage = new BehaviorSubject<number>(0);
    this.progressMessage = new BehaviorSubject<string>("");
  }

  // Establish a connection to the SignalR server hub
  public initiateSignalrConnection(): Promise<void> {
    console.log({environment})
    return new Promise((resolve, reject) => {
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl(environment.signalrHubUrl2)
        .build();

      this.setSignalrClientMethods();

      this.connection
        .start()
        .then(() => {
          console.log(`SignalR connection success! connectionId: ${this.connection.connectionId}`);
          resolve();
        })
        .catch((error: any) => {
          console.log(`SignalR connection error: ${error}`);
          reject();
        });
    });
  }

  // This method will implement the methods defined in the ISignalrDemoHub interface in the SignalrDemo.Server .NET solution
  private setSignalrClientMethods(): void {
    this.connection.on('DisplayMessage', (message: string) => {
      this.hubHelloMessage.next(message);
    });

    this.connection.on('DisplayMessageJSON', (message: any) => {
      console.log(message)
      this.hubHelloMessageJSON.next(message);
    });

    this.connection.on('ReportStatus', (message: any) => {
      console.log(message)
      this.hubReportStatusMessageJSON.next(message);
    });

    
    this.connection.on('RegisterReportResponse', (message: any) => {
      console.log('RegisterReportResponse received', message)
      this.RegisterReportResponse.next(message);
    });

    this.connection.on('UpdateProgressBar', (percentage: number) => {
      this.progressPercentage.next(percentage);
    });

    this.connection.on('DisplayProgressMessage', (message: string) => {
      this.progressMessage.next(message);
    });
  }
}
