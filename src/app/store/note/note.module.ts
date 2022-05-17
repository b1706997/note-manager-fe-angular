import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { featureName, noteReducer } from './note.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NoteEffects } from './note.effects';
@NgModule({
    imports:[
        StoreModule.forFeature(featureName, noteReducer),
        EffectsModule.forFeature([NoteEffects])
    ],
})

export class NoteModule{}