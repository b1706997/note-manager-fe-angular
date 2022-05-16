import { Component, OnInit } from '@angular/core';
import { Note } from '../../services/note/note';
import { NoteServiceService } from '../../services/note/note-service.service';

@Component({
  selector: 'app-note-manager',
  templateUrl: './note-manager.component.html',
  styleUrls: ['./note-manager.component.scss']
})
export class NoteManagerComponent implements OnInit {

  notes: Note[] = [];

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(data => {
      this.notes = data
    })
  }
  constructor(private noteService: NoteServiceService) { }

}
