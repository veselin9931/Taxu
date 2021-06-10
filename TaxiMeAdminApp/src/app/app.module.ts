import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { HomeComponent } from './pages/home/home/home.component';
import { FaqComponent } from './pages/faq/faq/faq.component';
import { AboutComponent } from './pages/about/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    UserDetailsComponent,
    CarDetailsComponent,
    PaymentsComponent,
    HomeComponent,
    FaqComponent,
    AboutComponent
  ],
  imports: [ 
    BrowserModule /* or CommonModule */, 
      FormsModule,
       ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
