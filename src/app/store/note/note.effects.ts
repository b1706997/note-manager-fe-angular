import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { NoteServiceService } from 'src/services/note/note-service.service';
import * as Action from '../../store/note/note.action';
@Injectable()
export class NoteEffects {
    constructor(private service: NoteServiceService, private actions$: Actions) { }
    loadNotes$ = createEffect(() => this.actions$.pipe(
        ofType(Action.loadNotes),
        mergeMap(() => this.service.getNotes().pipe(
            map(notes => ({ type: '[Note Manager] setNotes', notes })),
            catchError(e => EMPTY)
        ))
    ))

    createNote$ = createEffect(() => this.actions$.pipe(
        ofType(Action.createNote),
        exhaustMap(action => this.service.createNote(action.content).pipe(
            map(note => ({ type: '[Note Manager] addNote', note })),
            catchError(e => EMPTY)
        ))
    ))

    deleteNote$ = createEffect(() => this.actions$.pipe(
        ofType(Action.deleteNote),
        mergeMap(action => this.service.deleteNote(action.noteId).pipe(
            map(() => ({ type: '[Note Manager] deleteNote', noteId: action.noteId })),
            catchError(e => EMPTY)
        ))
    ))

    searchNote$ = createEffect(() => this.actions$.pipe(
        ofType(Action.searchNote),
        mergeMap(action => this.service.searchNote(action.searchValue).pipe(
            map((notes) => ({ type: '[Note Manager] setNotes', notes })),
            catchError(e => EMPTY)
        ))
    ))

    updateNote$ = createEffect(() => this.actions$.pipe(
        ofType(Action.updateNote),
        mergeMap(action => this.service.updateNote(action.noteId, action.content).pipe(
            map((note) => ({ type: '[Note Manager] updateStateNote', note })),
            catchError(e => EMPTY)
        ))
    ))


}

