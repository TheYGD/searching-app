import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchingComponent } from './searching.component';

const routes: Routes = [{ path: '', component: SearchingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchingRoutingModule { }
