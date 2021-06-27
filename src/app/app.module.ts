import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';

import { CountDownComponent } from './count-down/count-down.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { DataTableModule } from "angular-6-datatable";
import { NgxPaginationModule } from 'ngx-pagination';
import { JackpotTimerComponent } from './jackpot-timer/jackpot-timer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    CountDownComponent,

    JackpotTimerComponent,

  ],
  imports: [
    NgxPaginationModule,
    DataTableModule,
    CdkTableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    NgbModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
