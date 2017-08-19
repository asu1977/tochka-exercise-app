import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/tabs', pathMatch: 'full' },
    { path: 'tabs', component: TabsComponent},
    { path: 'tab', component: TabComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {

  }
