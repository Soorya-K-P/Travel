import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationsComponent } from './destinations.component';
import { AllDestinationsComponent } from './all-destinations/all-destinations.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { DescriptionComponent } from './description/description.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavouriteComponent } from './favourite/favourite.component';


@NgModule({
  declarations: [
    DestinationsComponent,
    AllDestinationsComponent,
    GalleryComponent,
    ContactComponent,
    FilterPipe,
    DescriptionComponent,
    HeaderComponent,
    FooterComponent,
    FavouriteComponent
  ],
  imports: [ 
    CommonModule,
    DestinationsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ]
})
export class DestinationsModule { }
