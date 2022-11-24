import { Component } from '@angular/core';
import { LangService } from './shared/lang.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private langService: LangService
        ) {}

    ngOnInit(): void {
        this.langService.init();
      }

 }
