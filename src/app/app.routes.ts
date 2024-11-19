import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';


export const routes: Routes = [

     { 
       path: 'login', 
            loadComponent: () => 
                import('./pages/auth/login/login.page').then(m => m.LoginPage), 
    //         canActivate: [AuthGuard] -> Esta linea permite el uso del guard en esa ruta, con lo cual, aplicará
    //                                     las protecciones especificadas.
    },

    {
        path: 'dashboard',
        component: HomePage, 
        loadChildren: () => 
            import('./pages/home/home.routes').then(m => m.homeRoutes), 
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