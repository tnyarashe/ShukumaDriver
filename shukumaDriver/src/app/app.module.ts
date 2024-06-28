import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comps/home/home.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { OrdersComponent } from './comps/orders/orders.component';
import { ViewordersComponent } from './comps/vieworders/vieworders.component';
import { SettingsComponent } from './comps/settings/settings.component';
import { MapComponent } from './comps/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    OrdersComponent,
    ViewordersComponent,
    SettingsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
