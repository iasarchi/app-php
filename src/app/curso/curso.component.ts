import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //URL base

  url = "http://localhost:8080/api/php/";

  //Vetor de cursos

  vetor: Curso[];

  //Objeto da classe Curso

  curso = new Curso();

  //Construtor  

  constructor(private curso_service: CursoService) {

  }

  //Inicializador

  ngOnInit(): void {
    //Ao iniciar o sistema, devera listar os cursos
    this.selecao();
  }

  //Cadastro

  cadastro(curso: Curso) {
    this.curso_service.cadastrarCurso(this.curso).subscribe(
    (res: Curso[]) => {

      //Adicionando dados ao vetos
      this.vetor = res;

      //Limpar os atributos
      this.curso.nomeCurso = null
      this.curso.valorCurso = null

      //Atualizar a listagem
      this.selecao();

    }
  )

  }

//Selecao

selecao(){
  this.curso_service.obterCursos().subscribe(
    (res: Curso[]) => {
      this.vetor = res;
    }
  )
}

//Alterar

alterar(): void {

}

//Remover

remover(): void {

}


}
