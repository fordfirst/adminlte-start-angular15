import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardMyProfileComponent } from './myprofile/myprofile.component';
import { DashboardTrendsComponent } from './trends/trends.component';

const routes: Routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full' },
    { path: 'my-profile', component: DashboardMyProfileComponent, pathMatch: 'full' },
    { path: 'trends', component: DashboardTrendsComponent, pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRouting { }


