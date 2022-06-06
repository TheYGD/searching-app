import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SearchingRoutingModule } from './searching-routing.module';
import { SearchingComponent } from './searching.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SearchingRoutingModule
  ]
})
export class SearchingModule { }
