import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'haji',
    loadChildren: () => import('./pages/haji/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'umrah',
    loadChildren: () => import('./pages/umrah/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/outbox.module').then( m => m.OutboxPageModule)
  },
  {
    path: 'rental',
    loadChildren: () => import('./pages/rental/rental.module').then( m => m.RentalPageModule)
  },
  {
    path: 'construction',
    loadChildren: () => import('./pages/construction/construction.module').then( m => m.ConstructionPageModule)
  },
  {
    path: 'transport',
    loadChildren: () => import('./pages/transport/transport.module').then( m => m.TransportPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
