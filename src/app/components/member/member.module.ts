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

import { MemberRouting } from './member.routing';
import { MemberUserProfileComponent } from './userprofile/userprofile.component';
import { MemberSubscriptionComponent } from './subscription/subscription.component';

@NgModule({
    imports: [
        CommonModule,
        MemberRouting,
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
        MemberUserProfileComponent,
        MemberSubscriptionComponent
    ]

})
export class MemberModule { }
