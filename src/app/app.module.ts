import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './destinations/contact/header/header.component';
import { FooterComponent } from './destinations/footer/footer.component';
import { DestinationsModule } from './destinations/destinations.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DescriptionComponent } from './destinations/description/description.component';
// import { DestinationsComponent } from './destinations/destinations.component';
// import { DataComponent } from './service/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    // HeaderComponent,
    // FooterComponent,
    LoginComponent,
    RegisterComponent,
    // DestinationsComponent
    // DataComponent
    // DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DestinationsModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
