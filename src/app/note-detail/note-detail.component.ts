import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NoteServiceService } from 'src/services/note/note-service.service';
import { Note } from '../note'
import {Location} from '@angular/common';
import { Store } from '@ngrx/store';
import * as Actions from '../store/note/note.action';
@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
  noteId: string = "";
  note?: Note;
  constructor(private store : Store, private route: ActivatedRoute, private noteService: NoteServiceService, private _location : Location) { }

  goBack() : void {
    this._location.back();
  }

  deleteNote() : void {
    if(confirm("Deleting this note ?")) {
      this.store.dispatch(Actions.deleteNote({noteId: this.noteId}));
      this.goBack();
    }
  }

  ngOnInit(): void {
    this.noteId = this.route.snapshot.paramMap.get('noteId')!;
    this.noteService.getNote(this.noteId).subscribe(data => {
      this.note = data;
    })
  }

}
