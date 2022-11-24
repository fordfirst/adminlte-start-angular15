import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRouting } from './auth.routing';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '@/shared/shared.module';

import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        AuthRouting,
        RouterModule,
        ModalModule.forRoot(),
        SharedModule
    ],
    declarations: [
        LoginComponent,
    ]
})

export class AuthModule {

}
