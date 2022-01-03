import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      Hello Ultimate Angular!
      <div class="wrappter">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
  constructor() {}
}
