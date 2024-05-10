import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { InputOutputComponent } from './input-output/input-output.component';
import { ChildComponent } from './child/child.component'
import { FormsModule } from '@angular/forms';
import { AfterviewComponent } from './afterview/afterview.component';
import { DirectiveDirective } from './directive.directive';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent,
    ChildComponent,
    AfterviewComponent,
    DirectiveDirective,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
