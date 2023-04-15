import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from '@modules/main/main.component';
import { HeaderComponent } from '@modules/main/header/header.component';
import { FooterComponent } from '@modules/main/footer/footer.component';
import { MenuSidebarComponent } from '@modules/main/menu-sidebar/menu-sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth/reducer';
import { uiReducer } from './store/ui/reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
import { TranslateModule } from '@ngx-translate/core';
import { HttpErrorInterceptor } from './shared/http-error.interceptor';
import { MenuItemComponent } from '@modules/main/menu-item/menu-item.component';

registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        MenuItemComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({ auth: authReducer, ui: uiReducer }),
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgbModule,
        NgxSpinnerModule,
        ToastrModule.forRoot({ timeOut: 2000, positionClass: 'toast-top-right', }),
        TranslateModule.forRoot()
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    // providers: [
    //     {
    //         provide: HTTP_INTERCEPTORS,
    //         useClass: HttpErrorInterceptor,
    //         multi: true
    //     }
    // ],
    bootstrap: [AppComponent]
})
export class AppModule { }
