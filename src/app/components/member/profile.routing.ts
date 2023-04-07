import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SMEProfileDocumentComponent } from './sme-profile/sme-profile.component';
import { ProfileDocumentComponent } from './profile-document/profile-document.component';
import { ProfileChinaComponent } from './profile-china/profile-china.component';

const routes: Routes = [
    { path: '', redirectTo:'sme-profile', pathMatch: 'full' },
    { path: 'sme-profile', component: SMEProfileDocumentComponent, pathMatch: 'full' },
    { path: 'profile-document', component: ProfileDocumentComponent, pathMatch: 'full' },
    { path: 'profile-china', component: ProfileChinaComponent, pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRouting { }


