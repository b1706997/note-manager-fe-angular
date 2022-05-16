import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteManagerComponent } from './note-manager/note-manager.component'
const routes: Routes = [
  { path: '', component: NoteManagerComponent },
  { path: 'detail', component: NoteDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
