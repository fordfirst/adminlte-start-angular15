import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LearningMyLearningComponent } from './mylearning/mylearning.component';
import { LearningCatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
    { path: '', redirectTo:'mylearning', pathMatch: 'full' },
    { path: 'mylearning', component: LearningMyLearningComponent, pathMatch: 'full' },
    { path: 'catalog', component: LearningCatalogComponent, pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LearningRouting { }


