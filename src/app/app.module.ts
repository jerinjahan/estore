import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

//#region ant icon
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_DATE_LOCALE, NZ_I18N, zh_CN as zorroLang } from 'ng-zorro-antd/i18n';
import { SharedModule } from './shared/shared.module';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { PagesModule } from './pages/page.module';

const antDesignIcons = AllIcons as {
    [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map((key) => antDesignIcons[key]);
//#endregion

const INTERCEPTOR_PROVIDES = [
    // AuthGuard,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        LayoutModule,
        PagesModule,
        DemoNgZorroAntdModule,
        BrowserAnimationsModule,
        CarouselModule 
    ],
    providers: [...INTERCEPTOR_PROVIDES],
    bootstrap: [AppComponent]
})
export class AppModule { }
