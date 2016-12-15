import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

 constructor(private location: Location) { }
  // Declaring / Initialising Variables
  stone : number;
  pounds : number;
  kilogram : number;
  feet : number;
  inches : number;
  centimetres : number;
  metres : number;
  BMI : number = null;
  category :string = "";

  // Functions for converting Variables

  // Kilograms to Stone
  KGToSP() {
    this.stone = Math.floor(((this.kilogram*2.2)/14));
    this.pounds = ((this.kilogram*2.2)%14);
  }
  //Pounds to Kilograms
  PToKG() {
    this.kilogram = ((this.stone* 6.65333 ) + this.pounds);
  }
  // Stone to Kilograms
  SToKG(){
    this.kilogram = ((this.pounds* 0.45359237 )+ this.stone);
  }
  //Centimetres to Feet 
  CMToFI(){
    this.feet = Math.floor(((this.centimetres/30.48)));
    this.inches = ((this.centimetres%30.48)/2.54);
  }
  // Feet to Centimetres
  FIToCM(){
    this.centimetres = ((this.feet*30.48)+ (this.inches*2.54));
    this.CMToM();
  }
  // Metres to Centimetres
  MToCM(){
    this.centimetres = this.metres*100;
    this.CMToFI();
  }
  // Centimeters to Metres
  CMToM(){
    this.metres = this.centimetres/100;
  }

  //Function to Calculate the BMI
  CalcBMI(){
    this.BMI =Math.round((this.kilogram/(this.metres*this.metres)*10))/10;
    if(this.BMI < 16){
      this.category = "extreme thinness range";
    }
     else if(this.BMI<17 && this.BMI>=16){
      this.category = "slight thinness range"; 
    }
     else if((this.BMI<18.5) && (this.BMI>=17)){
      this.category = "starting thinness range";
    }
     else if((this.BMI<25) && (this.BMI>=18.5)){
      this.category = "normal range";
    }
     else if((this.BMI<30) && (this.BMI>=25)){
      this.category = "overweight ";
    }
     else if((this.BMI<35) && (this.BMI>=30)){
      this.category = "obese class 1 range";
    }
     else if((this.BMI>=35)){
      this.category = "obese class 2 range";
    }
    
  }
  // Function that displays Result of BMI Calculation
  colour(){
    if(this.BMI < 16){
     return "red";
    }
     if(this.BMI<17 && this.BMI>=16){
      return "orange";
    }
     if((this.BMI<18.5) && (this.BMI>=17)){
      return "yellow";
    }
     if((this.BMI<25) && (this.BMI>=18.5)){
      return "green";
    }
     if((this.BMI<30) && (this.BMI>=25)){
      return "yellow";
    }
     if((this.BMI<35) && (this.BMI>=30)){
      return "orange";
    }
     if( (this.BMI>=35)){
      return "red";
    }
  }
  
  ngOnInit() {
  }
}
