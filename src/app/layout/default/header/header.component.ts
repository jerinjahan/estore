import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'layout-header',
	templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          nz-badge {
            margin-right: 20px;
            cursor:pointer;
          }
    
          [nz-icon] {
            width: 16px;
            height: 16px;
            line-height: 16px;
            font-size: 16px;
          }
        `
    ]
})
export class HeaderComponent {
	constructor() {}
}