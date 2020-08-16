import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioRegister } from '../interfaces/UsuarioRegister.interface';
import { environment } from 'src/environments/environment';
import { UsuarioLogin } from '../interfaces/UsuarioLogin.Interface';
import { tap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';



const base_url= environment.BASE_URL;

declare const gapi;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2:any;

  constructor(private httpClient: HttpClient, private router: Router
    ,private ngZone : NgZone) { 
    this.initGoogleApi();

    
  }

  initGoogleApi() {
    return new Promise(resolve => {
      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '171341641067-1qr1giggergvgk1epdb0n8iv5qkmad6f.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });
        resolve();
      });
      
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.auth2.signOut().then(() => {
      this.ngZone.run( () => {
        this.router.navigateByUrl('/login');
      }
    );
    });

  }
  crearUsuario(user : UsuarioRegister) {
    return this.httpClient.post(`${base_url}usuarios`,user );

  }

  loginUsuario(user : UsuarioLogin) {
    return this.httpClient.post(`${base_url}login`,user )
                                .pipe(
                                  tap(
                                    (response: any) => {
                                      localStorage.setItem('token', response.token);
                                    }
                                  )
                                );
    

  }

  validarTokenGoogle(token) {
    return this.httpClient.post(`${base_url}login/google`, { token } )
                              .pipe(
                                tap(
                                  (response: any) => {
                                    localStorage.setItem('token', response.jwt);
                                  }
                                )
                              );

  }

  renewToken() : Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    return this.httpClient.get(`${base_url}login/renew`,  {
        headers:{
          'x-token':token
        }
    }).pipe(
      tap(
        (response:any) => {
          localStorage.setItem('token', response.jwt);
        }
        )
      ,map( resp => true )
      ,catchError(Error => of(false))
    );
  }
}
