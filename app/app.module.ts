import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AutoCompleteModule } from './auto-complete/auto-complete.module';

@NgModule({
  imports:      [ AutoCompleteModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
