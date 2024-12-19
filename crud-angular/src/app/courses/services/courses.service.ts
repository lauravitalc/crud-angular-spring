import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, first, delay } from 'rxjs';

@Injectable({
  providedIn: 'root' // Significa que estará disponível para toda a aplicação
})
export class CoursesService {
  private readonly API = 'api/courses'; // Caminho do meu endpoint
  constructor(private httpClient: HttpClient) { } // Precisaremos importar o httpClient também para o app.module.ts, para ficar "global"

  list(): Observable<any> {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      //take(1), // O take(1) faz com que o Observable seja finalizado após a primeira emissão
      first(), // O first() faz com que o Observable seja finalizado após a primeira emissão
      tap(courses => console.log(courses)) // O tap é um operador que permite executar um efeito colateral em um Observable sem afetar o valor do mesmo
    ); // Retorna um Observable
  }
}

