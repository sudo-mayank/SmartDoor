import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
         MatSelectModule, MatCheckboxModule, MatInputModule  } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { InputSettingsComponent } from './form/input-settings/input-settings.component';
import { OutputSettingsComponent } from './form/output-settings/output-settings.component';
import { BatterySettingsComponent } from './form/battery-settings/battery-settings.component';
import { CabinetSettingsComponent } from './form/cabinet-settings/cabinet-settings.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ErrorComponent,
    FooterComponent,
    LogoutComponent,
    WelcomeComponent,
    InputSettingsComponent,
    OutputSettingsComponent,
    BatterySettingsComponent,
    CabinetSettingsComponent,
    MainNavComponent,
  ],
  imports: [
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTreeModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [RouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
