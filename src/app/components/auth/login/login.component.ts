import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { LoginService } from './login.service';
import { AuthLogicService } from '@services/authLogic.service';
import { ConfigService } from '@services/config.service';
import { LangService } from '@/shared/lang.service';
import { FileUploadService } from '@services/fileUpload.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isShowPassword: boolean = false;

    constructor(
        private service: LoginService,
        private router: Router,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private configService: ConfigService,
        private langService: LangService
    ) { }

    async ngOnInit() {
    }

    getUrlBackground() {
        return `url('assets/img/starterbg.jpg')`;
    }

    getUrlLogo() {
        return `url('assets/img/logo.png')`;
    }

}
