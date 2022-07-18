import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { User1ListComponent } from './user1-list/user1-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryComponent } from './country/country.component';
import { User1AuthModule } from './user1-auth/user1-auth.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    User1ListComponent,
    StudentListComponent,
    CountryComponent,
  ],
  imports: [BrowserModule, User1AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
