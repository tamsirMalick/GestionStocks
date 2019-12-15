import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitMockService } from './produit/produit.mock.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';
<<<<<<< HEAD

=======
>>>>>>> 136be673ad9ed5d54a5ada14271d01b00a09d20b

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    SidebarComponent,
    NavbarComponent,
    ContentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    ReactiveFormsModule
=======
    AppRoutingModule
>>>>>>> 136be673ad9ed5d54a5ada14271d01b00a09d20b
  ],
  providers: [ProduitMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
