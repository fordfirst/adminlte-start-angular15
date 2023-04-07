import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '@modules/main/main.component';
import { AuthGuardService } from '@services/authGuard.service';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        // canActivate: [AuthGuardService],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)
            },
            {
                path: 'business',
                loadChildren: () => import('./components/business/business.module').then(m => m.BusinessModule)
            },
            {
                path: 'research',
                loadChildren: () => import('./components/research/research.module').then(m => m.ResearchModule)
            },
            {
                path: 'learning',
                loadChildren: () => import('./components/learning/learning.module').then(m => m.LearningModule)
            },
            {
                path: 'member',
                loadChildren: () => import('./components/member/member.module').then(m => m.MemberModule)
            },
        ]
    },
    {
        path: 'auth',
        loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
    },
    { path: '**', redirectTo: '/auth/login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
