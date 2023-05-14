import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { authReducer } from './store/reducers';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
  ],
  declarations: [RegisterComponent],
  providers: [AuthService],
})
export class AuthModule {}
