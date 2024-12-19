import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [

     { 
       path: 'login', 
            loadComponent: () => 
                import('./pages/auth/login/login.page').then(m => m.LoginPage), 
            canActivate: [AuthGuard],
    },

    {
        path: 'dashboard',
        component: HomePage, 
        loadChildren: () => 
            import('./pages/home/home.routes').then(m => m.homeRoutes),
        canActivate: [AuthGuard],
        data: { rol: [0, 1] }
    },

    {
        path: 'unauthorized',
        loadComponent: () => 
            import('./pages/unauthorized/unauthorized.page').then(m => m.UnauthorizedPage), 
        canActivate: [AuthGuard]
    },

    

    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },

    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    }

];