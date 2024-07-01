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
import { TopNavComponent } from './comps/top-nav/top-nav.component';
import { BottomNavComponent } from './comps/bottom-nav/bottom-nav.component';
import { RegisterComponent } from './comps/register/register.component';
import { LoginComponent } from './comps/login/login.component';
import { FormsModule } from '@angular/forms';
import { DriverChatComponent } from './comps/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    OrdersComponent,
    ViewordersComponent,
    SettingsComponent,
    MapComponent,
    TopNavComponent,
    BottomNavComponent,
    RegisterComponent,
    LoginComponent,
    DriverChatComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
