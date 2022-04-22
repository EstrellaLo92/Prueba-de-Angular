import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [MenuComponent],
})
export class SharedModule {}
