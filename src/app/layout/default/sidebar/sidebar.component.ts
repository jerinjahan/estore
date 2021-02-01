import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SettingsService, User } from '@delon/theme';
import { AuthService } from 'src/app/_services';

@Component({
    selector: 'layout-sidebar',
    templateUrl: './sidebar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            [nz-icon] {
                margin-right: 6px;
                margin-left: 10px;
                font-size: 24px;
            }
        `,
    ],
})
export class SidebarComponent {
    user: any;
    constructor(private settings: SettingsService, private authService: AuthService) {
        this.user = this.authService.userValue;
    }
    get userAvatar(): User {
        return this.settings.user;
    }
}
