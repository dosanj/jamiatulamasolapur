import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentPageComponent } from './pages/content-page/content-page.component';
const routes: Routes = [
    {
        path: '',
        component: ContentPageComponent,
    },
    {
        path: ':link',
        component: ContentPageComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
