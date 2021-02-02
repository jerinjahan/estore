import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { NouisliderModule } from 'ng2-nouislider';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
		FormsModule,
		RouterModule,
        ReactiveFormsModule,
        CarouselModule,
        NouisliderModule,
        ...SHARED_ZORRO_MODULES
    ],
    exports : [
        CommonModule,
		FormsModule,
		ReactiveFormsModule,
        RouterModule,
        ...SHARED_ZORRO_MODULES
    ]
})
export class SharedModule { }
