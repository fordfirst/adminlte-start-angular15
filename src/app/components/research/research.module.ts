import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SharedModule } from '@/shared/shared.module';

import { ResearchRouting } from './research.routing';
import { ResearchThaiComponent } from './thai/thai.component';
import { ResearchChinaComponent } from './china/china.component';

@NgModule({
    imports: [
        CommonModule,
        ResearchRouting,
        RouterModule,
        FormsModule, ReactiveFormsModule,
        NgbModule,
        MatTableModule, MatSortModule, MatPaginatorModule, MatCheckboxModule,
        NgSelectModule,
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        SharedModule
    ],
    declarations: [
        ResearchThaiComponent,
        ResearchChinaComponent
    ]

})
export class ResearchModule { }
