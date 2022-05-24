import {createAction, props} from '@ngrx/store';
import {Note} from '../../note';
export const setNotes = createAction("[Note Manager] setNotes", props<{notes:Note[]}>())
export const loadNotes = createAction("[Note Manager] loadNotes")
export const createNote = createAction("[Note Manager] createNote", props<{content:string}>())
export const addNoteIntoStore = createAction("[Note Manager] addNote", props<{note:Note}>())
export const deleteNote = createAction("[Note Service] deleteNote", props<{noteId: string}>());
export const deleteNoteFromStore = createAction("[Note Manager] deleteNote",props<{noteId:string}>());
export const updateNote = createAction("[Note Manager] updateNote", props<{noteId: string, content: string}>());