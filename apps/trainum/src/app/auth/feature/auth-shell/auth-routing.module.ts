import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthShellComponent } from './auth-shell.component';

const routes: Routes = [
  {
    path: '',
    component: AuthShellComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('../auth-login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'signup',
        loadChildren: () =>
          import('../auth-signup/signup.module').then((m) => m.SignupModule),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
