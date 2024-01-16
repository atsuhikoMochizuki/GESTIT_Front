import { Adresse } from './adresse';
import { Utilisateur } from './utilisateur';
import { VehiculePerso } from './vehicule.perso';

export interface Covoiturage {
  id?: number;
  nombrePlacesRestantes?: number;
  dureeTrajet?: number;
  distanceKm?: number;
  dateDepart?: Date|string;
  adresseDepart?: Adresse;
  adresseDepartId?: number;
  adresseArrivee?: Adresse;
  adresseArriveeId?: number;
  organisateurId?: number;
  passagersId?: number[];
  vehiculePersoId?: number;
}
