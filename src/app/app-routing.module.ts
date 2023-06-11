import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsModule } from './destinations/destinations.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DescriptionComponent } from './destinations/description/description.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },




  { path:'',redirectTo:'/destinations',pathMatch:'full'},
  { path: 'destinations', loadChildren: () => import('./destinations/destinations.module').then(m => m.DestinationsModule) },
  {path : 'description/:id' , component:DescriptionComponent},
  // {path: '/', component:LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // DestinationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
