import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
		FormsModule,
		RouterModule,
        ReactiveFormsModule,
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
