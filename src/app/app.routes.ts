import { Routes } from '@angular/router';


export const routes: Routes = [

     { 
       path: 'login', 
            loadComponent: () => 
                import('./pages/auth/login/login.page').then(m => m.LoginPage), 
    //         canActivate: [AuthGuard] -> Esta linea permite el uso del guard en esa ruta, con lo cual, aplicará
    //                                     las protecciones especificadas.
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