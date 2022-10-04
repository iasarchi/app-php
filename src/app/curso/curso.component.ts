import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //URL base

  url ="http://localhost:8080/api/php/";

  //Vetor de cursos
  
  vetor: Curso[];

  //Construtor  
    
  constructor(private http: HttpClient) {

   }
    
  //Inicializador

  ngOnInit(): void {
  }

  //Cadastro

  cadastro(): void{
    alert ("Cadastro");
  }

  //Selecao

  selecao(): void{
    alert("Selecao");
  }

  //Alterar
0
  alterar(): void{
    alert("Alterar");
  }

   //Remover

  remover(): void{
    alert("Remover");
}


}
