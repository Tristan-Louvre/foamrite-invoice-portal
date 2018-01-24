import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";


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
    GenericTableComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
