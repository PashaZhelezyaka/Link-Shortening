import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login-page/login.component";
import { RegisterComponent } from "./register-page/register.component";
import { MainComponent } from "./main-page/main.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { AuthGuardGuard } from "./shared/auth-guard.guard";

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'main', component: MainComponent, canActivate: [AuthGuardGuard] },
  { path:'', redirectTo: 'login', pathMatch: 'full' },
  { path:'**', component: NotFoundPageComponent }
    ]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
