import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './pages/homepage/homepage.module#HomepageModule',
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutesModule {}
