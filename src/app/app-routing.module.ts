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
            }
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
