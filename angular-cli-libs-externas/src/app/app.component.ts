import { Component } from '@angular/core';

import * as lodash from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cli-libs-externas';

  list = lodash.map([1, 2, 3], (n) => `# ${n}`);
}
