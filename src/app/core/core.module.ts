import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { AppRoutingModule } from './../app-routing.module';
import { AuthInterceptor } from './../shared/auth.interceptor';
import { LoggingInterceptor } from './../shared/logging.interceptor';
import { SharedModule } from './../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule, // because of the dropdow directive
    AppRoutingModule,
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
  ],
  providers: [
    // ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ]
})
export class CoreModule { }
