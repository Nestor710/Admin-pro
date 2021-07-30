import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* import { AppRoutingModule } from './app-routing.module'; */
import { AppComponent } from './app.component';

// Modulos
import { PagesModule } from './pages/pages.module';

// Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
