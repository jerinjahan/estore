import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutDefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutDefaultComponent,
        // canActivate: [AuthGuard],
        // canActivateChild: [SimpleGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
            // { path: 'all-list', component: AllListComponent, pathMatch: 'full' },
            // { path: 'exception', loadChildren: () => import('./exception/exception.module').then((m) => m.ExceptionModule) },
        ],
    },
    { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
