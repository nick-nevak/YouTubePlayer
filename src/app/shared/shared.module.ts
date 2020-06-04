import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToFriendlyDurationPipe } from './pipes/to-friendly-duration.pipe';



@NgModule({
  declarations: [
    ToFriendlyDurationPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    ToFriendlyDurationPipe
  ]
})
export class SharedModule { }
