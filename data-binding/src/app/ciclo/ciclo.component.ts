import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10

  constructor() {
    this.log('constructor')
  }
  ngAfterContentInit(): void {
    this.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    this.log('ngAfterViewInit')
  }


  ngOnChanges(){
    this.log('ngOnChanges')
  }

  ngOnInit(): void {
    this.log('ngOnInit')
  }

  ngDoCheck(){
    this.log('ngDoCheck')
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked')
  }

  ngOnDestroy(){
    this.log('ngOnDestroy')
  }


  private log(hook: String){
    console.log(hook);
  }



}
