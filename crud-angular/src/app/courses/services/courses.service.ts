import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // Significa que estará disponível para toda a aplicação
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { } // Precisaremos importar o httpClient também para o app.module.ts, para ficar "global"

  list(): Course[] {
    return [
      {_id: '1', name: 'Angular', 'category': 'Front-End'},
      {_id: '2', name: 'Java', 'category': 'Back-End'}
    ];
  }
}
