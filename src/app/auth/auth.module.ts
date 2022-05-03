import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./pages/login/login.component";
import { RegistroComponent } from "./pages/registro/registro.component";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SharedModule } from "../shared/shared.module";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgChartsModule } from "ng2-charts";
import { GraficasComponent } from './pages/graficas/graficas/graficas.component';

@NgModule({
  declarations: [LoginComponent, RegistroComponent, DashboardComponent, GraficasComponent],
  imports: [
    ReactiveFormsModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    NgChartsModule,
    SharedModule,
    CommonModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
