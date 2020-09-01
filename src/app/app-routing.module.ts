import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
    data: { animation: 'HomePage' },
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { animation: 'DashPage' },
  },
  {
    path: 'heroes',
    component: HeroesComponent,
    data: { animation: 'HerosPage' },
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
    data: { animation: 'DetailPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
