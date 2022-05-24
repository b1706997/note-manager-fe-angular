import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Note} from '../../app/note';
@Injectable({
  providedIn: 'root',
})
export class NoteServiceService {
  noteUrl: string = 'http://192.168.85.16:8080/notes';

  constructor(private httpClient: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(this.noteUrl);
  }

  getNote(id: string): Observable<Note> {
    return this.httpClient.get<Note>(this.noteUrl + '/' + id);
  }

  createNote(content : string) : Observable<Note> {
    const formData = new FormData()
    formData.append('contents', content)
    return this.httpClient.post<Note>(this.noteUrl,formData);
  }

  deleteNote(noteId : string) : Observable<void> {
    return this.httpClient.delete<void>(this.noteUrl+"/"+noteId)
  }

  searchNote(searchValue : string) : Observable<Note[]> {
    return this.httpClient.get<Note[]>(this.noteUrl + "?contents=" + searchValue)
  }

  updateNote(noteId : string, content : string) : Observable<Note> {
    const formData = new FormData()
    formData.append('contents', content)
    return this.httpClient.put<Note>(this.noteUrl + "/" + noteId, formData)
  }
}
