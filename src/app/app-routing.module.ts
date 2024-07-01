import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNavComponent } from './comps/top-nav/top-nav.component';
import { BottomNavComponent } from './comps/bottom-nav/bottom-nav.component';
import { HomeComponent } from './comps/home/home.component';
import { RegisterComponent } from './comps/register/register.component';
import { LoginComponent } from './comps/login/login.component';
import { OrdersComponent } from './comps/orders/orders.component';
import { ViewordersComponent } from './comps/vieworders/vieworders.component';
import { SettingsComponent } from './comps/settings/settings.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { DriverChatComponent } from './comps/chat/chat.component';

const routes: Routes = [
  {path: '', redirectTo:'home' , pathMatch: 'full'},
  {path: 'topnav', component: TopNavComponent},
  {path: 'bottomnav', component: BottomNavComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'order', component: ViewordersComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'chat', component: DriverChatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
