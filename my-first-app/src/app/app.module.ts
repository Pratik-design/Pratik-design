import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { WarningAlertComponent } from './assignment/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './assignment/success-alert/success-alert.component';
import { DataBindingExampleComponent } from './data-binding-assignment/data-binding-example/data-binding-example.component';
import { DirectiveAssignmentComponent } from './directive-assignment/directive-assignment/directive-assignment.component';
import { DataBindingFinalComponent } from './assignment/data-binding-final/data-binding-final.component';
import { GameControlComponent } from './assignment/data-binding-final/game-control/game-control.component';
import { OddComponent } from './assignment/data-binding-final/odd/odd.component';
import { EvenComponent } from './assignment/data-binding-final/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DataBindingExampleComponent,
    DirectiveAssignmentComponent,
    DataBindingFinalComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
