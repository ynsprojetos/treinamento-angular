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

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true
  }



  constructor() { }

  ngOnInit(): void {
  }

}
