import {createAction, props} from '@ngrx/store';
import {Note} from '../../note';
export const setNotes = createAction("[Note Manager] setNotes", props<{notes:Note[]}>())
export const loadNotes = createAction("[Note Manager] loadNotes")