import { RouterModule, Routes } from '@angular/router';


export const homeRoutes: Routes = [

    { 
        path: 'analytics', 
            loadComponent: () => 
                import('../../components/analytics/analytics.component').then(m => m.AnalyiticsComponent), 
    },
 
    {
        path: '',
        redirectTo: 'analytics',
        pathMatch: 'full'
    },

];
