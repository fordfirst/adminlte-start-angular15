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

import { BusinessRouting } from './business.routing';
import { BusinessMatchingComponent } from './matching/matching.component';
import { BusinessChecklistComponent } from './checklist/checklist.component';
import { BusinessQualityComponent } from './quality/quality.component';

@NgModule({
    imports: [
        CommonModule,
        BusinessRouting,
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
        BusinessMatchingComponent,
        BusinessChecklistComponent,
        BusinessQualityComponent
    ]

})
export class BusinessModule { }
