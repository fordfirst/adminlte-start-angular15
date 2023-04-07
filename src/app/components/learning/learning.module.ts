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

import { LearningRouting } from './learning.routing';
import { LearningMyLearningComponent } from './mylearning/mylearning.component';
import { LearningCatalogComponent } from './catalog/catalog.component';

@NgModule({
    imports: [
        CommonModule,
        LearningRouting,
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
        LearningMyLearningComponent,
        LearningCatalogComponent
    ]

})
export class LearningModule { }
