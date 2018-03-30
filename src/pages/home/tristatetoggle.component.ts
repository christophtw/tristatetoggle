import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tri-state-toggle',
  template: `
    <div style="display: block">
      <div class="toggle-button left" [ngClass]="{ 'selected' : this.state === 1 }" (click)="setState(1)">Ja</div><div class="toggle-button right" [ngClass]="{ 'selected' : this.state === 0 }" (click)="setState(0)">Nein</div>
    </div>
    `,
    styles: [ '.selected { background-color: #b6e8a0; -webkit-box-shadow: inset 0px 0px 6px 0px rgba(0,0,0,0.6); -moz-box-shadow: inset 0px 0px 6px 0px rgba(0,0,0,0.6); box-shadow: inset 0px 0px 6px 0px rgba(0,0,0,0.6);}',
              '.toggle-button { width: 50px; display: inline-block; height: 35px; text-align: center; vertical-align: middle; padding-top: 8px; margin-left: 0px; margin-right: 0px; }',
              '.left { border: 1px solid #cccccc; -webkit-border-radius: 4px 0px 0px 4px; -moz-border-radius: 4px 0px 0px 4px; border-radius: 4px 0px 0px 4px; }',
              '.right { border: solid #cccccc; border-width: 1px 1px 1px 0px; -webkit-border-radius: 0px 4px 4px 0px; -moz-border-radius: 0px 4px 4px 0px; border-radius: 0px 4px 4px 0px; }'  ]
    })
export class TriStateToggle {

state: any;

  @Output() stateChange : EventEmitter<any> = new EventEmitter<any>();

  setState(value){

    if (this.state === value) {
      this.state = null;
    } else {
      this.state = value
    }

    this.stateChange.emit(this.state)

  }

  constructor(){
  }

}
