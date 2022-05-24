import { AddNoteDialogComponent } from '../add-note-dialog/add-note-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Note } from '../../note';
import { NoteServiceService } from '../../../services/note/note-service.service';
import { Store } from '@ngrx/store'
import { debounceTime, distinctUntilChanged, Observable, Subject } from 'rxjs';
import { featureName, State } from '../../store/note/note.reducer';
import { MatDialog } from '@angular/material/dialog';
import * as NoteActions from '../../store/note/note.action'
@Component({
  selector: 'app-note-manager',
  templateUrl: './note-manager.component.html',
  styleUrls: ['./note-manager.component.scss'],
})
export class NoteManagerComponent implements OnInit {

  notes$: Observable<Note[]> = this.store.select(featureName, 'notes')

  searchValue: string = ""

  noteSearchListener = new Subject<string>();

  constructor(
    public dialog: MatDialog,
    private store: Store<{ noteFeature: State }>
  ) {
    this.noteSearchListener.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(value => {
        if (value.length == 0)
          this.store.dispatch({ type: '[Note Manager] loadNotes' })
        else
          this.store.dispatch(NoteActions.searchNote({ searchValue: value }))
      })
  }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Note Manager] loadNotes' });
  }

  openAddNotesDialog(): void {
    const dialogRef = this.dialog.open(AddNoteDialogComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(NoteActions.createNote({ content: result }))
      }
    });
  }
}
