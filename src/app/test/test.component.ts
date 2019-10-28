import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h3>Welcome {{name}}</h3>
  <h3>Demo of enable and disable field using binding</h3>
  <input [disabled]="isDisabled" [id]="ID" type="text" value="gautham">
  <h3 [class]="successClass">class binding normal</h3>
  <h3 [class.text-danger]="activateDanger">class binding using conditions</h3>
  <h3 [ngClass]="classBindingFunction">class binding using ngClass and function</h3>
  <h3 [style.color]="'blue'">Style binding by assigning color string</h3>
  <h3 [style.color]="colorSelector?'red':'blue'">Style binding by assigning color using conditional</h3>
  <h3 [ngStyle]="styleBindingFunction">Style binding using ngStyle and function</h3>
  <button (click)="onclick($event)">click Event binding</button>
  {{greeting}}
  <h3>Two way binding</h3>
  <input [(ngModel)]="typeanything" type="text"/>
  {{typeanything}}
  `,
  styles: [`
  .text-success
    {
      color:green;
    }
  .text-danger
    {
      color:red;
    }  
  .text-special
    {
      font-style:italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name="gautham";
  public greeting="";
  public isDisabled=false;
  public ID="testID";
  public successClass="text-success";
  public activateSuccess=true;
  public activateDanger=false;
  public activateSpecial=true;
  public colorSelector=true;
  public classBindingFunction={
    "text-success":this.activateSuccess,
    "text-danger":this.activateDanger,
    "text-special":this.activateSpecial
  }
  public styleBindingFunction={
    color:"#4567ff",
    fontStyle:"italic"
  }
  onclick(event)
  {
    console.log(event);
    this.greeting="welcome to code evolution";
  }

  constructor() { }

  ngOnInit() {
  }

}
