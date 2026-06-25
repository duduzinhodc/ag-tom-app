import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Calculadora } from '../../model/calculadora';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora-component',
  imports: [ReactiveFormsModule],
  templateUrl: './calculadora-component.html',
  styleUrl: './calculadora-component.css',
})
export class CalculadoraComponent implements OnInit {
  @ViewChild('modal') modalRef = {} as ElementRef;

    private fb = inject(FormBuilder);
    public form: FormGroup = this.fb.group({
    num1: ['', Validators.required],
    num2: ['', Validators.required],
    result: ['', []],
  });
  operacao! : string;
  
  constructor(private calc:Calculadora) {}

  ngOnInit(): void {
  }

  somar(){
    var numero1 =  this.form.get('num1')?.value;
    var numero2 = this.form.get('num2')?.value;
    var resultado = this.calc.somar(numero1, numero2);
    this.form.get('result')?.setValue(resultado);
  }

  sub(){
    var numero1 =  this.form.get('num1')?.value;
    var numero2 = this.form.get('num2')?.value;
    var resultado = this.calc.sub(numero1, numero2);
    this.form.get('result')?.setValue(resultado);
  }

  multi(){
  var numero1 =  this.form.get('num1')?.value;
  var numero2 = this.form.get('num2')?.value;
  var resultado = this.calc.multiplicar(numero1, numero2);
  this.form.get('result')?.setValue(resultado);
  }

  div(){
  var numero1 =  this.form.get('num1')?.value;
  var numero2 = this.form.get('num2')?.value;
  var resultado = this.calc.dividir(numero1, numero2);
  this.form.get('result')?.setValue(resultado);
  }



  cliqueBotaoOperacao(calc: string) {
    this.operacao = calc;
  }
  
    calcular() {
      if (this.operacao || this.operacao != null) {
        if (this.operacao === 'SOMAR') {
          this.somar();
        }
      
        if (this.operacao === 'SUB'){
          this.sub();
        }

        if (this.operacao === 'MULTI'){
          this.multi();
        }

        if (this.operacao === 'DIV') {

          var numero1 = Number(this.form.get('num1')?.value);
          var numero2 = Number(this.form.get('num2')?.value);

          if (numero1 < numero2) {
          alert('O primeiro número deve ser maior que o segundo!');
          return;
          }

          this.div();
        }

    } else {
      alert('Escolha uma operacao!');
    }
  }
  
}
