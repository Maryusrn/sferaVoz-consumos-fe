import { RouterModule, Routes } from '@angular/router';


export const homeRoutes: Routes = [

    { 
        path: 'analytics', 
            loadComponent: () => 
                import('../../components/analytics/analytics.component').then(m => m.AnalyiticsComponent), 
    },

    { 
        path: 'users-list', 
            loadComponent: () => 
                import('../../components/users/user-list/user-list.component').then(m => m.UserListComponent), 
    },
 
    {
        path: '',
        redirectTo: 'analytics',
        pathMatch: 'full'
    },

];
