import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { CovoituragesItemComponent } from './components/covoiturages/covoiturages-item/covoiturages-item.component';
import { CovoituragesFormComponent } from './components/covoiturages/covoiturages-form/covoiturages-form.component';
import { CovoituragesVehiculePersoComponent } from './components/covoiturages/covoiturages-vehicule-perso/covoiturages-vehicule-perso.component';
import { CovoituragesOrganiseComponent } from './components/covoiturages/covoiturages-organise/covoiturages-organise.component';
import { CovoiturageComponent } from './components/covoiturages/covoiturage/covoiturage.component';
import { ReservationVsComponent } from './components/reservation-vs/reservation-vs.component';
import { ReservationVsListComponent } from './components/reservation-vs/reservation-vs-list/reservation-vs-list.component';
import { ReservationVsItemComponent } from './components/reservation-vs/reservation-vs-item/reservation-vs-item.component';
import { ReservationVsFormComponent } from './components/reservation-vs/reservation-vs-form/reservation-vs-form.component';
import { VehiculeServiceComponent } from './components/vehicule-service/vehicule-service.component';
import { VehiculeServiceListComponent } from './components/vehicule-service/vehicule-service-list/vehicule-service-list.component';
import { VehiculeServiceItemComponent } from './components/vehicule-service/vehicule-service-item/vehicule-service-item.component';
import { VehiculeServiceFormComponent } from './components/vehicule-service/vehicule-service-form/vehicule-service-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { CovoiturageListComponent } from './components/covoiturages/covoiturage-list/covoiturage-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleCovoiturageComponent } from './components/covoiturages/single-covoiturage/single-covoiturage.component';
import { VehiculeServiceAddComponent } from './components/vehicule-service/vehicule-service-add/vehicule-service-add.component';
import { VehiculeServiceModifyComponent } from './components/vehicule-service/vehicule-service-modify/vehicule-service-modify.component';
import { ExtractDatePipe } from './shared/utils/extract-date.pipe';
import { ExtractTimePipe } from './shared/utils/extract-time.pipe';
import { AdressesComponent } from './components/adresses/adresses.component';
import { CovoituragesOrganiseListComponent } from './components/covoiturages/covoiturages-organise/covoiturages-organise-list/covoiturages-organise-list.component';
import { CovoituragesOrganiseFormComponent } from './components/covoiturages/covoiturages-organise/covoiturages-organise-form/covoiturages-organise-form.component';
import { VehiculePersoComponent } from './components/vehicule-perso/vehicule-perso.component';
import { VehiculePersoFormComponent } from './components/vehicule-perso/vehicule-perso-form/vehicule-perso-form.component';
import { VehiculePersoAddComponent } from './components/vehicule-perso/vehicule-perso-add/vehicule-perso-add.component';
import { VehiculePersoModifyComponent } from './components/vehicule-perso/vehicule-perso-modify/vehicule-perso-modify.component';
import { VehiculePersoListComponent } from './components/vehicule-perso/vehicule-perso-list/vehicule-perso-list.component';
import { CovoituragesOrganiseModifyComponent } from './components/covoiturages/covoiturages-organise/covoiturages-organise-modify/covoiturages-organise-modify.component';
import { CovoiturageConformationComponent } from './components/covoiturages/covoiturage-conformation/covoiturage-conformation.component';
import { ConfirmationComponent } from './components/covoiturages/confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LoginComponent,
    MainComponent,
    AuthentificationComponent,
    CovoituragesItemComponent,
    CovoituragesFormComponent,
    CovoituragesVehiculePersoComponent,
    CovoituragesOrganiseComponent,
    CovoiturageComponent,
    ReservationVsComponent,
    ReservationVsListComponent,
    ReservationVsItemComponent,
    ReservationVsFormComponent,
    VehiculeServiceComponent,
    VehiculeServiceListComponent,
    VehiculeServiceItemComponent,
    VehiculeServiceFormComponent,
    FooterComponent,
    UtilisateursComponent,
    CovoiturageListComponent,
    LandingPageComponent,
    SingleCovoiturageComponent,
    VehiculeServiceAddComponent,
    VehiculeServiceModifyComponent,
    ExtractDatePipe,
    ExtractTimePipe,
    AdressesComponent,
    CovoituragesOrganiseListComponent,
    CovoituragesOrganiseFormComponent,
    VehiculePersoComponent,
    VehiculePersoFormComponent,
    VehiculePersoAddComponent,
    VehiculePersoModifyComponent,
    VehiculePersoListComponent,
    VehiculePersoComponent,
    CovoituragesOrganiseModifyComponent,
    CovoiturageConformationComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  /*Insertion de la locale française pour le formatage des dates*/
  providers: [ { provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default);
  }
}
