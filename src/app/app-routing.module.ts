import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { ErrorComponent } from './error/error.component';
import { InputSettingsComponent } from './form/input-settings/input-settings.component';
import { OutputSettingsComponent } from './form/output-settings/output-settings.component';
import { BatterySettingsComponent } from './form/battery-settings/battery-settings.component';
import { CabinetSettingsComponent } from './form/cabinet-settings/cabinet-settings.component';

const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'login', component: SigninComponent},
  {path: 'dashboard', component: WelcomeComponent, canActivate: [RouteGuardService]},
  {path: 'inputsettings', component: InputSettingsComponent, canActivate: [RouteGuardService]},
  {path: 'outputsettings', component: OutputSettingsComponent, canActivate: [RouteGuardService]},
  {path: 'batterysettings', component: BatterySettingsComponent, canActivate: [RouteGuardService]},
  {path: 'cabinetsettings', component: CabinetSettingsComponent, canActivate: [RouteGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
