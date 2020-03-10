import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteComponent } from './auto-complete.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AutoCompleteService} from '../services/auto-complete.service';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule, BrowserModule, FormsModule, HttpModule
  ],
  declarations: [AutoCompleteComponent],
  exports: [AutoCompleteComponent],
  providers: [AutoCompleteService]
})
export class AutoCompleteModule { }