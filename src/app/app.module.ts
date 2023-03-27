import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CompareComponent } from './compare/compare.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MainComponent,
    NavbarComponent,
    CompareComponent,
    LeaderboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    GridModule, PagerModule
    
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
