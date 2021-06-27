import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';
const ROOT_URL = 'https://api.jacktopbet.com/api/test/';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(ROOT_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(ROOT_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(ROOT_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(ROOT_URL + 'admin', { responseType: 'text' });
  }

  getWinners() {
    return this.http.get(ROOT_URL + 'allWinners');
  }
  getWinnersLimit() {
    return this.http.get(ROOT_URL + 'allWinnersLimit');
  }
  getWinnersAmountLimit() {
    return this.http.get(ROOT_URL + 'allWinnersAmountLimit');
  }

  addWinner(name, amout, winDate): Observable<any> {

    return this.http.post(ROOT_URL + 'addWinner', {
      name: name,
      amout: amout,

      winDate: winDate

    });
  }

  DeleteWinner(id): Observable<any> {
    return this.http.delete(ROOT_URL + 'deleteWinner/' + id, {});
  }



  addJackpot(endDate, startDate): Observable<any> {

    return this.http.post(ROOT_URL + 'addJackpot', {
      endDate: endDate,
      startDate: startDate,
    });
  }

  UpdateJackpot(id, x) {
    return this.http.put(ROOT_URL + 'updateJackpotr/' + id, x)
  }

  getJack() {
    return this.http.get(ROOT_URL + 'allJackpot');
  }


}
