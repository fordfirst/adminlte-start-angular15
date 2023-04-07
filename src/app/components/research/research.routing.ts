import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ResearchThaiComponent } from './thai/thai.component';
import { ResearchChinaComponent } from './china/china.component';

const routes: Routes = [
    { path: '', redirectTo: 'thai', pathMatch: 'full' },
    { path: 'thai', component: ResearchThaiComponent, pathMatch: 'full' },
    { path: 'china', component: ResearchChinaComponent, pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResearchRouting { }


