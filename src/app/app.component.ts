import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'javascriptAvanzado';

  public expresion1 = RegExp('abc');
  public expresion2 = /hola m/;
  public expresion3 = /[0123456789]/;
  public expresion4 = /[0-9a-zA-Z]/;
  public expresion5 = /[A-Z]/;
  public expresion6 = /[^01010101]/;
  public expresion7 = /\d\d-\d\d-\d\d\d\d/;
  public expresion8 = /\d+/;
  //public expresion8 = /\d*/;

  constructor() {
    //console.log(this.expresion1);
    //console.log(this.expresion1.test('abcde'));
    //console.log(this.expresion2.test('hola mundo'));
    //console.log(this.expresion3.test('Saludos 2019'));
    //console.log(this.expresion4.test('Saludos 2019'));
    //console.log(this.expresion5.test('saludos 2019'));
    //console.log(this.expresion6.test('010101'));
    //console.log(this.expresion7.test('01-julio-2019'));
    console.log(this.expresion8.test('rehr4'));
  }
}
