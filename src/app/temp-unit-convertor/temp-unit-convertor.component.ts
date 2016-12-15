import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-unit-convertor',
  templateUrl: './temp-unit-convertor.component.html',
  styleUrls: ['./temp-unit-convertor.component.css']
})
export class TempUnitConvertorComponent implements OnInit {

  // Declare & Initialise Variables
  Celsius : number = null;
  Fahrenheit : number = null;
  counter : number = 0;

  constructor() { }

  // Button Funciton
   button(){
    if(this.Celsius !=null ){
      this.CelsiustoFahrenheit();
    }
    else if (this.FahrenheittoCelsius !=null){
      this.FahrenheittoCelsius();
    }
   }

  // Function to convert Celcius to Fahrenheit
  CelsiustoFahrenheit(){
    this.Fahrenheit = this.Celsius * 9 / 5 + 32;
    this.counter++;
  }

  // Function to convert Fahrenheit to Celcius
  FahrenheittoCelsius(){
    this.Celsius = (this.Fahrenheit - 32) * 5 / 9;
    this.counter++;
  }

  ngOnInit() {
  }

}
