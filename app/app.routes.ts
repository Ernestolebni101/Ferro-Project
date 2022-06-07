import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthComponent } from './components/auth/auth.component'
import { PresentationComponent } from './components/presentation/presentation.component';

const APP_ROUTES = [
    {path:'login',component: AuthComponent},
    {path:'admin',component: AdminComponent},
    {path:'presentation',component:PresentationComponent},
    {path: 'add', component:AddProductsComponent}

];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);