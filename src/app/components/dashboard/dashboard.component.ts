import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileUploadService } from '@services/fileUpload.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import moment from 'moment';
import { LangService } from '@/shared/lang.service';
import { DashboardService } from './dashboard.service';

declare var $: any;

@Component({
    selector: 'app-dashboard-main',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor(
        private service: DashboardService,
    ) { }

    async ngOnInit() {

    }

}
