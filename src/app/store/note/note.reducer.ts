import { createReducer, on } from '@ngrx/store';
import * as NoteActions from './note.action';
import { Note } from '../../note';

export interface State {
    notes: Note[]
}

export const initialState: State = {
    notes: []
}

export const noteReducer = createReducer(
    initialState,
    on(NoteActions.setNotes, (state, action) => {
        return { notes: action.notes }
    }),
    on(NoteActions.addNoteIntoStore, (state, action) => {
        const newState = [...state.notes];
        newState.push(action.note);
        return { notes: newState }
    }),
    on(NoteActions.deleteNoteFromStore, (state, action) => {
        const newState: Note[] = [];
        state.notes.forEach((e:Note) => {
            console.log(e)
            console.log(action.noteId)
            if(e.id.toString() != action.noteId) {
                newState.push(e)
            }
            else 
            console.log(e)
        })
        return { notes: newState }
    })
)

export const featureName = "noteFeature";