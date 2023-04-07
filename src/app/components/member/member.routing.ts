import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MemberUserProfileComponent } from './userprofile/userprofile.component';
import { MemberSubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
    { path: '', redirectTo:'userprofile', pathMatch: 'full' },
    { path: 'userprofile', component: MemberUserProfileComponent, pathMatch: 'full' },
    { path: 'subscription', component: MemberSubscriptionComponent, pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MemberRouting { }


