import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    NopagefoundComponent
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    NopagefoundComponent
  ], 
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }
