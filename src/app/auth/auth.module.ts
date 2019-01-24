import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

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
