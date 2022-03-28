import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectInfoCardsComponent } from './components/object-info-cards/object-info-cards.component';
import { RedSquaresComponent } from './components/red-squares/red-squares.component';
import { SetBackgroundDirective } from './directives/set-background.directive';
import { SquaresColorDirective } from './directives/squaresColor.directive';
import { AgePipe } from './pipes/age.pipe';
import { UserPipe } from './pipes/user.pipe';
import { UserService } from './services/user.service.ts.service';

@NgModule({
  declarations: [
    AppComponent,
    ObjectInfoCardsComponent,
    RedSquaresComponent,
    SetBackgroundDirective,
    SquaresColorDirective,
    UserPipe,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
