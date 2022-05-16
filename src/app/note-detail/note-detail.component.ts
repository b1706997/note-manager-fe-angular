import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NoteServiceService } from 'src/services/note/note-service.service';
import { Note } from '../../services/note/note'
@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
  noteId: string = "";
  note?: Note;
  constructor(private router: Router, private route: ActivatedRoute, private noteService: NoteServiceService) { }

  ngOnInit(): void {
    this.noteId = this.route.snapshot.paramMap.get('noteId')!;
    this.noteService.getNote(this.noteId).subscribe(data => {
      this.note = data;
    })
  }

}
