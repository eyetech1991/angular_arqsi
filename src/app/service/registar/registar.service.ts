import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,} from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { stringify } from '@angular/compiler/src/util';
import { HttpResponse } from '@angular/common/http/src/response';
import { Response } from '@angular/http/src/static_response';

class Token { token: string };

@Injectable()
export class RegistarService {

  // URL de registo
  private authUrl = 'http://gerirreceitas2017arqsi.azurewebsites.net/api/user/register';

  constructor(
    private http: HttpClient
  ) { }


  //register
  register(userName: string, email: string, password: string): Observable<boolean> {


    const options = {
      headers: Headers,
      observe: "response", // to display the full response
      responseType: "json"
  };


    return new Observable<boolean>(observer => {
      this.http.post(this.authUrl, {
        userName: userName,
        email: email,
        password: password,
        isPaciente: true,
        isMedico: false,
        isFarmaceutico: false
      },{observe: 'response'})
        .subscribe(data => {
          if (data.status === 200) {
            observer.next(true);
          } else {
            observer.next(false);
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
          console.log(err);
          observer.next(false);
        });

    });
  }
}

