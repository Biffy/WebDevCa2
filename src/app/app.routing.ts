import { TempUnitConvertorComponent } from './temp-unit-convertor/temp-unit-convertor.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { HomeComponent } from './home/home.component';
 
export const AppRoutes: any = [
    { path: "Temp", component: TempUnitConvertorComponent },
    { path: "BMI", component: BmiCalculatorComponent },
    { path: "Home", component: HomeComponent }
];
 
export const AppComponents: any = [
    TempUnitConvertorComponent,
    BmiCalculatorComponent,
    HomeComponent
];