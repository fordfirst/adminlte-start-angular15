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

    @ViewChild('forcePasswordModal') forcePasswordModal;
    @ViewChild('forgotPasswordModal') forgotPasswordModal;

    isShowPassword: boolean = false;
    submitted: boolean = false;
    form = new FormGroup({
        adminUsername: new FormControl(),
        adminPassword: new FormControl(),
        language: new FormControl(),
    });

    submittedChangePassword: boolean = false;
    formChangePassword = new FormGroup({
        newPassword: new FormControl(),
        confirmNewPassword: new FormControl(),
    });
    isShowPasswordNew: boolean = false;
    isShowPasswordConfirmNew: boolean = false;

    dataAuthorization: any;

    submittedForgot: boolean = false;
    formForgot = new FormGroup({
        adminEmail: new FormControl()
    });

    FileUploadService = FileUploadService;
    dataCompany: any = {
        companyBg: null,
        companyLogo: null
    };

    constructor(
        private service: LoginService,
        private router: Router,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private configService: ConfigService,
        private langService: LangService
    ) { }

    async ngOnInit() {
        await this.getDataCompany();
        await this.getLanguage();
    }

    getLanguage() {
        let language = AuthLogicService.getSession('language') ? AuthLogicService.getSession('language') : 'en';
        AuthLogicService.setSession('language', language);
        this.form.get('language').setValue(language);
    }

    getUrlBackground() {
        return `url('assets/img/starterbg.jpg')`;
    }

    getUrlLogo() {
        return `url('assets/img/logo.png')`;
    }

    async onLanguageChange() {
        this.langService.changeLanguage(this.form.get('language').value);
        AuthLogicService.setSession('language', this.form.get('language').value);
    }

    async submitLogin() {
        this.router.navigate(['/dashboard']);
    }

    async submitChangePassword() {
        this.spinner.show();
        try {
            await this.service.forceChangePassword(this.formChangePassword.value);
            this.spinner.hide();
            this.forcePasswordModal.hide();
            const lastUrl: string = AuthLogicService.getSession('lastUrl');
            if (lastUrl) {
                // clear cache last url
                this.spinner.hide();
                AuthLogicService.setSession('lastUrl', '');
                this.router.navigate([lastUrl]);
            } else {
                this.spinner.hide();
                this.router.navigate(['/dashboard']);
            }
            this.spinner.hide();
        } catch (error) {
            console.log(error);
            this.toastr.error((error.error.message) ? (error.error.message) : 'Not Found', 'ERROR');
            this.spinner.hide();
        }
    }

    openForgotPasswordModal() {
        this.formForgot.reset();
        this.submittedForgot = false;
        this.formForgot.setValue({ adminEmail: null });
        this.forgotPasswordModal.show();
    }

    async submitForgotPassword() {
        this.spinner.show();
        try {
            await this.service.forgotPassword(this.formForgot.value);
            this.toastr.success('Send Email Success', 'SUCCESS');
            this.spinner.hide();
            this.forgotPasswordModal.hide();
        } catch (error) {
            console.log(error);
            this.spinner.hide();
            this.toastr.error((error.error.message) ? (error.error.message) : 'Not Found', 'ERROR');
        }
    }

    async getDataCompany() {
        try {
            this.dataCompany = await this.service.getCompanyById();
        } catch (error) {
            console.log(error);
        }
    }



}
