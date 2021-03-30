import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'forecast', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  { path: '', redirectTo: 'forecast', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
