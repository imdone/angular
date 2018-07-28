/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component, NgModule, ɵrenderComponent as renderComponent} from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `<div i18n i18n-title title="Hello Title!">Hello World!</div>`
})
export class HelloWorld {
}
// TODO (misko): Forgetting to export HelloWorld and not having NgModule fails silently. id:468

@NgModule({declarations: [HelloWorld]})
export class INeedToExistEvenThoughIAmNotNeeded {
}
// TODO (misko): Package should not be required to make this work. id:683

renderComponent(HelloWorld);
