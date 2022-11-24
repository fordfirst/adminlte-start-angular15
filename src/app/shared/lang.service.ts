import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import en from '../languages/en.json';
import th from '../languages/th.json';
import ch from '../languages/ch.json';
import { Router } from '@angular/router';
import { AuthLogicService } from '@services/authLogic.service';

const languageKey = '__lang';

@Injectable({
    providedIn: 'root',
})
export class LangService {
    language;

    constructor(
        private translate: TranslateService,
    ) { }

    init(): void {
        this.translate.setTranslation('en', en);
        this.translate.setTranslation('th', th);
        this.translate.setTranslation('ch', ch);

        this.translate.setDefaultLang(AuthLogicService.getSession('language') ? AuthLogicService.getSession('language') : 'en');
    }

    changeLanguage(lang) {
        this.translate.use(lang);
    }

    getTranslateValue(value) {
        return new Promise<void>((resolve, reject) => {
            this.translate.get(value).subscribe((res) => {
                resolve(res);
            }, (error => reject(error)));
        });
    }
}