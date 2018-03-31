import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
// define selector for Angular notation <tri-state-toggle></tri-state-toggle>
  selector: 'tri-state-toggle',
// define HTML structure with property binding of CSS-Class "selected"
  template: `
    <div style="display: block">
      <div class="toggle-button left" [ngClass]="{ 'selected' : this.state === 1 }" (click)="setState(1)">Ja</div><div class="toggle-button right" [ngClass]="{ 'selected' : this.state === 0 }" (click)="setState(0)">Nein</div>
    </div>
    `,
// some ugly CSS styles
  styles:   [ '.selected { background-color: #b6e8a0; -webkit-box-shadow: inset 0px 0px 6px 0px rgba(0,0,0,0.6); -moz-box-shadow: inset 0px 0px 6px 0px rgba(0,0,0,0.6); box-shadow: inset 0px 0px 6px 0px rgba(0,0,0,0.6);}',
              '.toggle-button { width: 50px; display: inline-block; height: 35px; text-align: center; vertical-align: middle; padding-top: 8px; margin-left: 0px; margin-right: 0px; }',
              '.left { border: 1px solid #aaaaaa; -webkit-border-radius: 4px 0px 0px 4px; -moz-border-radius: 4px 0px 0px 4px; border-radius: 4px 0px 0px 4px; }',
              '.right { border: solid #aaaaaa; border-width: 1px 1px 1px 0px; -webkit-border-radius: 0px 4px 4px 0px; -moz-border-radius: 0px 4px 4px 0px; border-radius: 0px 4px 4px 0px; }'  ]
    })
export class TriStateToggle {

// current state of the tri state toggle component lives here
state: any;

// Output decorator with EventEmitter to communicate state to the parent component on any change
@Output('stateChange') stateChange : EventEmitter<any> = new EventEmitter<any>();

// Input decorator with set function to change toggle state when a new value is assigned by the parent component
@Input('state') set stateValue(value) {
    this.state = value;
  }

setState(value){
// the tri-state-logic when the user taps the toggle
    if (this.state === value) {
      this.state = null;
    } else {
      this.state = value
    }

// emit the new state to the parent component
    this.stateChange.emit(this.state)

  }

// No need to define anything in the constructor
  constructor() {}

}
