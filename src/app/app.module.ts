import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './search-service/search.service';
import {ProfileRequestService} from './profile-request.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'search', component: SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    // NavbarComponent,
    // SearchFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    SearchService,
    ProfileRequestService,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
