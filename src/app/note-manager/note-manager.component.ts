import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteServiceService } from '../../services/note/note-service.service';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import {State} from '../store/note/note.reducer';
@Component({
  selector: 'app-note-manager',
  templateUrl: './note-manager.component.html',
  styleUrls: ['./note-manager.component.scss']
})
export class NoteManagerComponent implements OnInit {

  notes$: Observable<Note[]> = this.store.select('notes');

  notes : Note[] = []

  ngOnInit(): void {
    this.store.dispatch({ type: '[Note Manager] loadNotes' });
    this.store.select('notes').subscribe( (e : Note[])=>{
      console.log(e)
    })
  }

  constructor(private store: Store<{ notes: Note[] }>) { }

}
