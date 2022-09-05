import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:any = 'http://google.com'
  urlImagem: any = 'https://picsum.photos/id/237/200/300'
  cursoAngular: boolean = true;
  valorAtual: String = '';
  valorSalvo: String = '';
  isMouseOver: boolean = false;
  nome: String = 'abc';
  nomeCurso: string = 'CURSO ANGULAR'
  valorInicial: number = 50;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true
  }

  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value)
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  onMudouValor(evento: any){
    console.log(evento);
  }


  constructor() { }

  ngOnInit(): void {
  }

  botaoClicado(){
    alert('Botão clicado!')
  }

  salvarValor(evento: any){
    this.valorSalvo = evento
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }

}
