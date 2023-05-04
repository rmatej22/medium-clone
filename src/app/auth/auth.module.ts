import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [RegisterComponent],
})
export class AuthModule {}
