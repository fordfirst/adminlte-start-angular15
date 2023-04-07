import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BusinessMatchingComponent } from './matching/matching.component';
import { BusinessChecklistComponent } from './checklist/checklist.component';
import { BusinessQualityComponent } from './quality/quality.component';

const routes: Routes = [
    { path: '', redirectTo:'matching', pathMatch: 'full' },
    { path: 'matching', component: BusinessMatchingComponent, pathMatch: 'full' },
    { path: 'checklist', component: BusinessChecklistComponent, pathMatch: 'full' },
    { path: 'quality', component: BusinessQualityComponent, pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BusinessRouting { }


