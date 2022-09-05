import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login-page/login.component";
import { RegisterComponent } from "./register-page/register.component";
import { MainComponent } from "./main-page/main.component";

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'main', component: MainComponent},
  {path:'', redirectTo: 'login', pathMatch: 'full'},
    ]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
