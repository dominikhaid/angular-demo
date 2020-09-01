import { Component, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
// @HostBinding('@.disabled')
export class AppComponent {
  // title = 'Tour of Heroes';
  constructor(private location: Location) {}
  goBack(): void {
    this.location.back();
  }

  prepareRoute(outlet: any) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
