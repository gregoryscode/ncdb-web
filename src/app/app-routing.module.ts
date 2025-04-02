import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbContentComponent } from './components/db-content/db-content.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'db/items',
    component: DbContentComponent
  },
  {
    path: 'db/quests',
    component: DbContentComponent
  },
  {
    path: 'db/classes',
    component: DbContentComponent
  },
  {
    path: 'db/skills',
    component: DbContentComponent
  },
  {
    path: 'db/codex',
    component: DbContentComponent
  },
  {
    path: 'db/craft',
    component: DbContentComponent
  },
  {
    path: 'db/achievements',
    component: DbContentComponent
  },
  {
    path: 'db/dungeons',
    component: DbContentComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }