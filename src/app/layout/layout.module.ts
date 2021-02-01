import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LayoutDefaultComponent } from './default/default.component';
import { FooterComponent } from './default/footer/footer.component';
import { HeaderComponent } from './default/header/header.component';

const COMPONENTS = [
    LayoutDefaultComponent,
    HeaderComponent,
    FooterComponent
];

@NgModule({
    imports: [
        SharedModule, 
    ],
    // entryComponents: SETTINGDRAWER,
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class LayoutModule {}
