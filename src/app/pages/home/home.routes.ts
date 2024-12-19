import { RouterModule, Routes } from '@angular/router';
import { UsersGuard } from '../../guards/users.guard';


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
            canActivate: [UsersGuard],
            data: { rol: [1] }
    },
 
    {
        path: '',
        redirectTo: 'analytics',
        pathMatch: 'full'
    },

];
