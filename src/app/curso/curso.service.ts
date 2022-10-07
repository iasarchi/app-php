import { HttpClient, HttpParams } from '@angular/common/http';
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

  //Remover curso
  removerCurso(curso:Curso): Observable<Curso[]>{
    const params = new HttpParams().set("idCurso",curso.idCurso.toString());

    return this.http.delete(this.url+'excluir',{params:params})
    .pipe(map((res)=>{
      const filtro = this.vetor.filter((curso)=>{
        return +curso['idCurso'] !== +curso.idCurso;
      });
      return this.vetor = filtro;
    }))
  }

    //Atualizar Curso
    atualizarCurso(curso:Curso): Observable<Curso[]>{

    //Executa a alteracao via URL
      return this.http.put(this.url+'alterar',{cursos: curso})

      //Percorrer o vetor para saber qual e o id do curso alterado
      .pipe(map((res)=>{
        const cursoAlterado = this.vetor.find((item)=>{
          return +item['idCurso'] == +[];
        });

        //Altera o valor do vetor local
        if(cursoAlterado){
          cursoAlterado['nomeCurso'] = curso['nomeCurso'];
          cursoAlterado['valorCurso'] = curso['valorCurso']
        }
        return this.vetor;
      }))

    }

}
