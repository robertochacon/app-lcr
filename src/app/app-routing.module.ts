import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultingOutComponent } from './components/consulting-out/consulting-out.component';
import { ConsultingComponent } from './components/consulting/consulting.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EntitiesComponent } from './components/entities/entities.component';
import { UsersComponent } from './components/users/users.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { MessengersShipmentsComponent } from './components/messengers-shipments/messengers-shipments.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  // {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'entities', component: EntitiesComponent},
  {path: 'users', component: UsersComponent},
  {path: 'messengers', component: MessengerComponent},
  {path: 'messengers-shipments', component: MessengersShipmentsComponent},
  {path: 'shipments', component: ShipmentsComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'consulting', component: ConsultingComponent},
  {path: 'consulting-out', component: ConsultingOutComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
