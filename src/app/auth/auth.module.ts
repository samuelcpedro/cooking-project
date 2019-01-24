import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  // import module that we might use
  imports: [
    // CommonModule,
    FormsModule,
    AuthRoutingModule,
  ],
  // wich component we use
  declarations: [
    SigninComponent,
    SignupComponent,
  ]
})
export class AuthModule { }
