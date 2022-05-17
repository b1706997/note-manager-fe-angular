import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteServiceService } from '../../services/note/note-service.service';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import {featureName, State} from '../store/note/note.reducer';
@Component({
  selector: 'app-note-manager',
  templateUrl: './note-manager.component.html',
  styleUrls: ['./note-manager.component.scss']
})
export class NoteManagerComponent implements OnInit {

  notes$: Observable<Note[]> = this.store.select(featureName,'notes')

  ngOnInit(): void {
    this.store.dispatch({ type: '[Note Manager] loadNotes' });
  }

  constructor(private store: Store<{ noteFeature: State}>) { }
}
