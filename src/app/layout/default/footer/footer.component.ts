import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'layout-footer',
	templateUrl: './footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	constructor() {}
}
