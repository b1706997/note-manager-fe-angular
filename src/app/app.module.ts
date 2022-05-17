import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteManagerComponent } from './note-manager/note-manager.component';
import { NoteModule } from './store/note/note.module';
import { StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NoteEffects } from './store/note/note.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment
import { noteReducer } from './store/note/note.reducer';
@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteDetailComponent,
    NoteManagerComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({noteReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([NoteEffects]),
    NoteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
