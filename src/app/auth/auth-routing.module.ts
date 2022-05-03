import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegistroComponent } from "./pages/registro/registro.component";
import { GraficasComponent } from "./pages/graficas/graficas/graficas.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "registro",
        component: RegistroComponent,
      },
      {
        path: "dashboard",
        component: DashboardComponent,
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      {
        path: "graficas",
        component: GraficasComponent,
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      {
        path: "**",
        redirectTo: "login",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
