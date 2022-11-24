import { AppState } from '@/store/state';
import { ToggleControlSidebar, ToggleSidebarMenu } from '@/store/ui/actions';
import { UiState } from '@/store/ui/state';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppService } from '@services/app.service';
import { AuthLogicService } from '@services/authLogic.service';
import { Observable } from 'rxjs';

const BASE_CLASSES = 'main-header navbar navbar-expand navbar-light navbar-white';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @HostBinding('class') classes: string = BASE_CLASSES;
    public ui: Observable<UiState>;
    public searchForm: FormGroup;

    dataRouteNavbar = [];
    dataUser = {
        adminUsername: null,
        adminRole: null
    };

    constructor(
        private appService: AppService,
        private store: Store<AppState>,
        private authLogicService: AuthLogicService
    ) { }

    ngOnInit() {
        this.ui = this.store.select('ui');
        this.ui.subscribe((state: UiState) => {
            this.classes = `${BASE_CLASSES} ${state.navbarVariant}`;
        });
        this.searchForm = new FormGroup({
            search: new FormControl(null)
        });

        this.dataUser.adminUsername = AuthLogicService.getSession('adminUsername') ? AuthLogicService.getSession('adminUsername') : null;
        this.dataUser.adminRole = AuthLogicService.getSession('adminRole') ? AuthLogicService.getSession('adminRole') : null;
    }

    ngAfterContentChecked() {
        this.dataRouteNavbar = JSON.parse(localStorage.getItem("navbar"));
    }

    logout() {
        this.appService.logout();
    }

    onToggleMenuSidebar() {
        this.store.dispatch(new ToggleSidebarMenu());
    }

    onToggleControlSidebar() {
        this.store.dispatch(new ToggleControlSidebar());
    }

    redirectPageHeader(url) {
        location.replace(this.authLogicService.getFrontendUrl(url));
    }
}
