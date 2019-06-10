import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
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
         MatCheckboxModule, MatRadioModule  } from '@angular/material';
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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RightsidenavComponent } from './rightsidenav/rightsidenav.component';
import { MatSelectModule } from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import { MatInputModule } from '@angular/material';

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
    RightsidenavComponent,
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
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
  ],
  providers: [RouteGuardService, MainNavComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
