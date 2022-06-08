import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { StudentsModule } from './students/students.module';

@NgModule({
  declarations: [
    AppComponent,
    LessonsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
