import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from "@angular/router";

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AnalysisComponent } from './analysis/analysis.component';
import { HomeComponent } from './home/home.component';
import { SymbolsComponent } from './symbols/symbols.component';
import { SummaryComponent } from './summary/summary.component';
import { ThemesComponent } from './themes/themes.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutComponent } from './about/about.component';



const routes : Routes = [
  { path: 'analysis', component: AnalysisComponent},
  { path: '', redirectTo: '/analysis', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'symbols', component: SymbolsComponent},
  { path: 'summary', component: SummaryComponent},
  { path: 'themes', component: ThemesComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'about', component: AboutComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    AnalysisComponent,
    HomeComponent,
    SymbolsComponent,
    SummaryComponent,
    ThemesComponent,
    CharactersComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
