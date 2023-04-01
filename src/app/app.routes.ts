import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'accueil',
    loadComponent: () => import('./accueil/accueil.page').then( m => m.AccueilPage)
  },
  {
    path: 'categorie',
    loadComponent: () => import('./categorie/categorie.page').then( m => m.CategoriePage)
  },
  {
    path: 'accueildetail',
    loadComponent: () => import('./accueildetail/accueildetail.page').then( m => m.AccueildetailPage)
  },
  {
    path: 'categoriedetail',
    loadComponent: () => import('./categoriedetail/categoriedetail.page').then( m => m.CategoriedetailPage)
  },
];
