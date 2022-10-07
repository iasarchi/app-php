import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //URL 
  url = "http://localhost/api/php/";

  //Vetor
  
  vetor: Curso[];

  //Construtor
  constructor(private http: HttpClient) { }

  //Metodo - Obter todos os cursos
  obterCursos():Observable<Curso[]>{
    return this.http.get(this.url+"listar").pipe(
      map((res)=>{
        this.vetor = res['cursos'];
        return this.vetor;
      })
    )
  }

  //Cadastrar curso
  cadastrarCurso(curso: Curso): Observable<Curso[]>{
    return this.http.post(this.url+'cadastrar',{cursos:curso})
    .pipe(map((res) =>{
      this.vetor.push(res['curso']);
      return this.vetor;
    }))
  }

}
