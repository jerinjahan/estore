import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutDefaultComponent } from './layout/default/default.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CategoryComponent } from './pages/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutDefaultComponent,
        // canActivate: [AuthGuard],
        // canActivateChild: [SimpleGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
            { path: 'category', component: CategoryComponent, pathMatch: 'full' },
            { path: 'product-details', component: ProductDetailsComponent, pathMatch: 'full' },
            { path: 'blog', component: BlogComponent, pathMatch: 'full' },
            { path: 'blog-details', component: BlogDetailsComponent, pathMatch: 'full' }
        ],
    },
    { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
