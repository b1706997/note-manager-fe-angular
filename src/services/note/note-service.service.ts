import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Note} from './note';
@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  
  noteUrl : string = "http://localhost:8080/notes";

  constructor(private httpClient : HttpClient) {
  }

  getNotes():Observable<Note[]> {
     return this.httpClient.get<Note[]>(this.noteUrl)
  }
  
  getNote(id:string):Observable<Note> {
    return this.httpClient.get<Note>(this.noteUrl+"/"+id)
  }
}
