import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '../material/material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    RouterModule,
  ],
  exports: [MenuComponent],
})
export class SharedModule {}
