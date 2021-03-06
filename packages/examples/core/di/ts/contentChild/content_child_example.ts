/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// #docregion Component
import {Component, ContentChild, Directive, Input} from '@angular/core';

@Directive({selector: 'pane'})
export class Pane {
  // TODO (issue/24571): remove '!'. id:658
  @Input() id !: string;
}

@Component({
  selector: 'tab',
  template: `
    <div>pane: {{pane?.id}}</div> 
  `
})
export class Tab {
  // TODO (issue/24571): remove '!'. id:997
  @ContentChild(Pane) pane !: Pane;
}

@Component({
  selector: 'example-app',
  template: `
    <tab>
      <pane id="1" *ngIf="shouldShow"></pane>
      <pane id="2" *ngIf="!shouldShow"></pane>
    </tab>
    
    <button (click)="toggle()">Toggle</button>
  `,
})
export class ContentChildComp {
  shouldShow = true;

  toggle() { this.shouldShow = !this.shouldShow; }
}
// #enddocregion
