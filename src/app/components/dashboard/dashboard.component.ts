import { Component, OnInit, ViewChild } from '@angular/core';
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
