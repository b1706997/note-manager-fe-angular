import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteManagerComponent } from './note-manager/note-manager.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';
@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteDetailComponent,
    NoteManagerComponent,
    TestingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
