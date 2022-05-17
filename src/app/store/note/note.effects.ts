import { Injectable, NgModule } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, tap } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { NoteServiceService } from 'src/services/note/note-service.service';
@Injectable()
export class NoteEffects {
    constructor(private service: NoteServiceService, private actions$: Actions) { }
    loadNotes$ = createEffect(() => this.actions$.pipe(
        ofType('[Note Manager] loadNotes'),
        mergeMap(() => this.service.getNotes().pipe(
            map(notes => ({ type: '[Note Manager] setNotes',  notes })),
            catchError(e => EMPTY)
        ))
    ))
}

