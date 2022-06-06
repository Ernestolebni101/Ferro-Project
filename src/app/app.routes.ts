import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component'
import { PresentationComponent } from './components/presentation/presentation.component';

const APP_ROUTES = [
    {path:'login',component: AuthComponent},
    {path:'presentation',component:PresentationComponent}

];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);