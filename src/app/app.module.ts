import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { MatMenuModule, MatIconModule, MatButtonModule, MatCardModule } from "@angular/material";


import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './image/image.component';
import { GenericTableComponent } from './shared/tables/generic-table/generic-table.component';


import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './shared/partials/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    UserComponent,
    UsersComponent,
    ClientsComponent,
    ClientComponent,
    InvoicesComponent,
    InvoiceComponent,
    ItemsComponent,
    ItemComponent,
    ImagesComponent,
    ImageComponent,
    GenericTableComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
