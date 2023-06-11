import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AllDestinationsComponent } from './all-destinations/all-destinations.component';
import { ContactComponent } from './contact/contact.component';
import { DescriptionComponent } from './description/description.component';
import { DestinationsComponent } from './destinations.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: AllDestinationsComponent },
  { path: 'all-destinations', component: AllDestinationsComponent },
  { path: 'gallery', component: GalleryComponent},
  { path: 'contact', component: ContactComponent},
  { path:'description:id', component:DescriptionComponent},
  { path:'favourite', component:FavouriteComponent},
  { path: '**',component:PageNotFoundComponent}

  // { path:'header', component:HeaderComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationsRoutingModule { }
