import {Injectable, OnInit} from "@angular/core";
import {environment} from "../../../environments/environment.development";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ReservationVs} from "../models/reservation.vs";
import {BehaviorSubject, catchError, Observable, Subscription} from "rxjs";
import {Utilisateur} from "../models/utilisateur";
import {VehiculeService} from "../models/vehicule.service";
import {AuthentificationService} from "./authentification.service";
import {UtilisateursService} from "./utilisateurs.service";
import {Router} from "@angular/router";
import {HttpHeaderService} from "./http-header.service";


@Injectable({
  providedIn: 'root'
})
export class ReservationVsService implements OnInit {

/*
  private _reservationVs: ReservationVs = {};
  private _allReservationsVs: ReservationVs [] = [];
  private _reservationsVsByUser: ReservationVs [] = [];
  private _currentUser: Utilisateur = {};
  //currentVs: VehiculeService = {};
  private _currentReservationVs: ReservationVs = {};
*/

  headers = new HttpHeaders();
  headers2 = new HttpHeaders();
  currentUser: Utilisateur = {};
  currentUser2: Utilisateur = {};

  private reservationVsSource = new BehaviorSubject<ReservationVs>({});
  private allReservationsVsSource = new BehaviorSubject<ReservationVs[]>([]);
  private upcomingReservationsVsByUserSource = new BehaviorSubject<ReservationVs[]>([]);
  private pastReservationsVsByUserSource = new BehaviorSubject<ReservationVs[]>([]);
  private currentVsSource = new BehaviorSubject<VehiculeService>({});
  private currentReservationVsSource = new BehaviorSubject<ReservationVs>({});
  private editedReservationVsSource
    = new BehaviorSubject<ReservationVs>({});
  private modifBtnSource = new BehaviorSubject<boolean>(true);

  reservationVs$ = this.reservationVsSource.asObservable();
  allReservationsVs$ = this.allReservationsVsSource.asObservable();
  upcomingReservationsVsByUser$ = this.upcomingReservationsVsByUserSource.asObservable();
  pastReservationsVsByUser$ = this.pastReservationsVsByUserSource.asObservable();
  currentVs$ = this.currentVsSource.asObservable();
  currentReservationVs$ = this.currentReservationVsSource.asObservable();
  editedReservationVs$ = this.editedReservationVsSource.asObservable();
  modifBtn$ = this.modifBtnSource.asObservable();


  private _baseUrl = environment.urlApi.reservationsvs;
  private _realBaseUrl = environment.urlApi.reservation;
  private _oldResVs: ReservationVs= {};
  private _subscription = new Subscription();
  constructor(private _http: HttpClient,
              private _authService: AuthentificationService,
              private _utilisateurService: UtilisateursService,
              private _router: Router,
              private _httpHeaderService: HttpHeaderService) {
  }

  ngOnInit(): void {
        this._subscription
          .add(this._authService.headers$
            .subscribe(data => {
              this.headers2 = data;
              //console.log("Réservation Service — this.headers : ", this.headers)
            }));
        this._subscription
          .add(this._utilisateurService.currentUser$
            .subscribe(data => {this.currentUser2 = data}));
    //console.log("Réservation Service — ngOnInit / this.currentUser before :", this.currentUser);
        this.currentUser = this._utilisateurService.getSharedCurrentUser;
    //console.log("Réservation Service — ngOnInit / this.currentUser after :", this.currentUser);
    //console.log("Réservation Service — ngOnInit / this.headers before :", this.currentUser);
        this.headers = this._httpHeaderService.getHeaders()
    //console.log("Réservation Service — ngOnInit / this.headers after :", this.currentUser);
    }

  ngOnDestroy(): void {
    //console.log("Réservation Service — onDestroy / this.headers :", this.headers);
    //console.log("Réservation Service — onDestroy / this.currentUser :", this.currentUser);
    this._subscription.unsubscribe();
    //console.log("Réservation Service — onDestroy / this.headers :", this.headers);
    //console.log("Réservation Service — onDestroy / this.currentUser :", this.currentUser);
    this.headers = new HttpHeaders();
    this.currentUser = {};
    //console.log("Réservation Service — onDestroy / this.headers :", this.headers);
    //console.log("Réservation Service — onDestroy / this.currentUser :", this.currentUser);
  }

  private _init(){
    //console.log("Reservation Service — onInit / localStorage.getItem : ",window.localStorage.getItem("JWT-TOKEN"))
    if(!window.localStorage.getItem("JWT-TOKEN")){
      this._authService.updateLoggedBtn(false);
      //this._authService.updateHeaders(new HttpHeaders());
      this._router.navigateByUrl('login');
    }
    //console.log("Réservation Service —_init / this.headers : ",this.headers);
/*    this._authService.headers$.subscribe(data => {
      //console.log("Réservation Service —_init / _authService.headers$ : ",data);
      this.headers = data;
    });*/
  }
  findAll(): Observable<ReservationVs[]> {
    this._http
      .get<ReservationVs[]>(this._baseUrl);
    return this._http.get<ReservationVs[]>(this._realBaseUrl, {headers: this.headers});
  }

  findById(id: number): Observable<ReservationVs[]> {
    return this._http.get<ReservationVs[]>(`${this._baseUrl}/${id}`);
  }

  findByVsId(vsId: number): Observable<ReservationVs> {
    return this._http.get<ReservationVs>(`${this._baseUrl}/?vehiculeServiceId=${vsId}`);
  }

    arrayResVs: ReservationVs[] = [];
  findUpcomingByUserId(userId?: number): Observable<ReservationVs[]>{
    //console.log(`${this._realBaseUrl}/upcoming`);
    this._init();

    //console.log("Réservation Service —findUpcomingByUserId / HttpHeaders : ", this.headers);
/*    this._http.get<ReservationVs[]>(`${this._realBaseUrl}/upcoming`, {headers: new HttpHeaders(window.localStorage.getItem("JWT-TOKEN"))}).subscribe(data => {
        this.arrayResVs = data;
      }
    );
   // console.log("Réservation Service —this.arrayResVs[] : ", this.arrayResVs);
    this.arrayResVs.forEach(resVs => {
      //console.log("Réservation Service —findUpcomingByUserId")
      //console.log("ForEACH : userId =", resVs.userId)
    })*/

    return this._http.get<ReservationVs[]>(`${this._realBaseUrl}/upcoming`, {headers: this._httpHeaderService.getHeaders()});
  }
  findPastByUserId(userId?: number): Observable<ReservationVs[]>{
    //console.log(this.headers.keys())
    //this._init();
    this._http.get<any>(`${this._realBaseUrl}/upcoming`, {headers: this._httpHeaderService.getHeaders()}).subscribe(data => {
        //console.log(data);
        this.arrayResVs = data;
      }
    );
    //console.log("Réservation Service —this.arrayResVs[] : ", this.arrayResVs);
    this.arrayResVs.forEach(resVs => {
      //console.log("Réservation Service —findUpcomingByUserId")
      //console.log("ForEACH : userId =", resVs.userId)
    })
    return this._http.get<ReservationVs[]>(`${this._realBaseUrl}/past`, {headers: this._httpHeaderService.getHeaders()})
  }

  create(resVSCreated: ReservationVs): Observable<ReservationVs> {
    //console.log("CREATE")
    this.updateReservationVs({});
    this.updateCurrentReservationVs({})
    this._init();
    //console.log("Réservation Service —create / HttpHeaders : ", this.headers);
    //this._http.post<ReservationVs>(this._baseUrl, resVSCreated).subscribe();
    return this._http.post(`${this._realBaseUrl}/create`, resVSCreated, {headers: this._httpHeaderService.getHeaders()});
  }

  update(resVSUpdated: ReservationVs): Observable<ReservationVs> {
    //console.log("Réservation Service —update / resVS : ", resVSUpdated);
    //console.log("Réservation Service —update / resVS mapToDto : ", this.mapToDto(resVSUpdated));
    resVSUpdated = this.mapToDto(resVSUpdated);
    //this.updateReservationVs({});
    //this.updateCurrentReservationVs({})
    //this._http.put<ReservationVs>(`${this._realBaseUrl}/${resVSUpdated.id}`, resVSUpdated, {headers: this.headers}).subscribe();
    return this._http.put<ReservationVs>(`${this._realBaseUrl}/${resVSUpdated.id}`, resVSUpdated, {headers: this._httpHeaderService.getHeaders()});
  }

  delete(resVSDeleted: ReservationVs): Observable<ReservationVs> {
    //console.log(`${this._realBaseUrl}/${resVSDeleted.id}`)
    //console.log('Deleting reservation with ID:', resVSDeleted.id);
    //this._http.delete<ReservationVs>(`${this._realBaseUrl}/${resVSDeleted.id}`, {headers: this.headers}).subscribe();
    return this._http.delete<ReservationVs>(`${this._realBaseUrl}/${resVSDeleted.id}`, {headers: this._httpHeaderService.getHeaders()});
  }



  updateReservationVs(data: ReservationVs): void {
    this.reservationVsSource.next(data);
  }

  updateAllReservationsVs(data: ReservationVs[]): void {
    this.allReservationsVsSource.next(data);
  }

  updateUpcomingReservationsVsByUser(data: ReservationVs[]): void {
    this.upcomingReservationsVsByUserSource.next(data);
  }

  updatePastReservationsVsByUser(data: ReservationVs[]): void {
    this.pastReservationsVsByUserSource.next(data);
  }

/*  updateCurrentUser(data: Utilisateur): void {
    this.currentUserSource.next(data);
  }*/
  updateCurrentVs(data: VehiculeService): void {
    this.currentVsSource.next(data);
  }
  updateCurrentReservationVs(data: ReservationVs): void {
    this.currentReservationVsSource.next(data);
  }
  updateEditedReservationVs(data: ReservationVs): void {
    this.editedReservationVsSource.next(data);
  }

  updateModifBtn(data: boolean): void {
    this.modifBtnSource.next(data);
  }

  mapToDto(reservation: ReservationVs): ReservationVs {
    return {
      id: reservation.id,
      userId: reservation.userId,
      vehiculeServiceId: reservation.vehiculeServiceId,
      dateHeureDepart: reservation.dateHeureDepart,
      dateHeureRetour: reservation.dateHeureRetour
    };
  }

  getOldResVs (){
    return this._oldResVs;
  }

  setOldResVs(res : ReservationVs){
    this._oldResVs = res;
  }

}
