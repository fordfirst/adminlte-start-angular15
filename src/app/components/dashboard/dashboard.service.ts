import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'environments/environment';
import moment from 'moment';
import { BaseService } from '@services/base.service';
import { catchError } from 'rxjs/operators';
import { ConfigService } from '@services/config.service';

@Injectable({
    providedIn: 'any'
})
export class DashboardService {

    constructor(
        private http: HttpClient,
    ) { }

}
