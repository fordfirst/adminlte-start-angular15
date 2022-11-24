import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule,
        CommonModule,
        TranslateModule
    ],
    exports: [
        RouterModule,
        TranslateModule,
        CommonModule
    ],
})
export class SharedModule { }
