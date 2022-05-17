import { AddNoteDialogComponent } from './../add-note-dialog/add-note-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Note } from '../../services/note/note';
import { NoteServiceService } from '../../services/note/note-service.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-note-manager',
  templateUrl: './note-manager.component.html',
  styleUrls: ['./note-manager.component.scss'],
})
export class NoteManagerComponent implements OnInit {
  notes: Note[] = [];

  constructor(
    public dialog: MatDialog,
    private noteService: NoteServiceService
  ) {}

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((data) => {
      this.notes = data;
    });
  }
  openAddNotesDialog(): void {
    const dialogRef = this.dialog.open(AddNoteDialogComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.notes.push({
          id: Math.random(),
          contents: result,
          creationDate: new Date().toTimeString(),
        });
      }
    });
  }
}
