import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { noteReducer } from './note.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NoteEffects } from './note.effects';
@NgModule({
    imports:[
        StoreModule.forFeature('noteStore', noteReducer),
        EffectsModule.forFeature([NoteEffects])
    ],
})

export class NoteModule{}