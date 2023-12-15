import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [InputComponent, NavHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,
  ],
  exports: [InputComponent, NavHeaderComponent],
})
export class SharedModule {}
