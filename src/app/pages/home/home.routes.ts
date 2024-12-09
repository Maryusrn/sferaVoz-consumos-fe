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
        path: 'users-details/:email',
        loadComponent: () => 
            import('../../components/users/user-view/user-view.component').then(m => m.UserViewComponent), 
    },
 
    {
        path: '',
        redirectTo: 'analytics',
        pathMatch: 'full'
    },

];
