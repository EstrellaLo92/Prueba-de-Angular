import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
  ],
})
export class MaterialModule {}
