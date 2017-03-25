import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponentRoute} from './LandingPage/landing-page.component.route';

import { LandingPageComponent } from './LandingPage/landing-page.component';

// export const routes: Routes = [
//     {path: '', redirectTo: '/landingPage', pathMatch: 'full'},
//     ...LandingPageComponentRoute
// ];

// export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);

export const routing: Routes = [
        {
        path: 'landingPage',
        component: LandingPageComponent
      },
      {
        path: '',
        redirectTo: '/landingPage',
        pathMatch: 'full'
      },

    ];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routing);
