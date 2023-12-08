import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Home - IgniteUI for Angular';

constructor(
  public router: Router,
) {

}
  
  menuItemClicked(route: string) {
    console.log('menuItemClicked',route)
    this.router.navigate(['/' + route]);
}

}
