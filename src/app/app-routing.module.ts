import { RouterModule, Routes } from "@angular/router";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { ClientsComponent } from "./clients/clients.component";
import { ClientComponent } from "./client/client.component";
import { ImagesComponent } from "./images/images.component";
import { ImageComponent } from "./image/image.component";
import { InvoicesComponent } from "./invoices/invoices.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { ItemsComponent } from "./items/items.component";
import { ItemComponent } from "./item/item.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./user/user.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthenticationComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'clients/:id', component: ClientComponent},
  { path: 'images', component: ImagesComponent},
  { path: 'images/:id', component: ImageComponent},
  { path: 'invoice', component: InvoicesComponent},
  { path: 'invoices/:id', component: InvoiceComponent},
  { path: 'item', component: ItemsComponent},
  { path: 'items/:id', component: ItemComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

