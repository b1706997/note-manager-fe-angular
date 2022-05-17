import { createReducer, on } from '@ngrx/store';
import * as NoteActions from './note.action';
import {Note} from '../../note';

export interface State {
    notes: Note[]
}

export const initialState : State = {
    notes: []
}

export const noteReducer = createReducer(
    initialState,
    on(NoteActions.setNotes, (state, action) => ({ notes: action.notes }))
)