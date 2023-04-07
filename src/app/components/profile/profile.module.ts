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

import { ProfileRouting } from './profile.routing';
import { SMEProfileDocumentComponent } from './sme-profile/sme-profile.component';
import { ProfileDocumentComponent } from './profile-document/profile-document.component';
import { ProfileChinaComponent } from './profile-china/profile-china.component';

@NgModule({
    imports: [
        CommonModule,
        ProfileRouting,
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
        SMEProfileDocumentComponent,
        ProfileDocumentComponent,
        ProfileChinaComponent
    ]

})
export class ProfileModule { }
