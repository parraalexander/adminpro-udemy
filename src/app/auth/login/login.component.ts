import { Component, OnInit, NgZone } from '@angular/core';
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal  from 'sweetalert2'


declare const gapi;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.scss']
})

export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  public auth2:any;

  constructor(private router : Router, private fb: FormBuilder, private userRegisterService : UsuarioService
    ,private ngZone : NgZone) { }

  ngOnInit(): void {

    this.formLogin = this.fb.group({
      email: [localStorage.getItem('email') || '', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['1234', Validators.required],
      remmemberMe:[false, Validators.required]
    });

    this.renderButton();
  }

  validarCampos(campo:string):boolean {
    if(this.formLogin.get(campo).invalid && this.formLogin.get(campo).dirty) {
      return false;
    } else {
      return true;
    }
  }



  ingresar(){
    console.log("Submit -> ");

    
    if (this.formLogin.get('remmemberMe').value) {
      localStorage.setItem('email', this.formLogin.get('email').value);
    } else {
      localStorage.removeItem('email');
    }
    this.userRegisterService.
                          loginUsuario(this.formLogin.value).
                          subscribe(
                            (response)=>{
                              this.router.navigateByUrl('/dashboard');
                            },
                            (error) => {
                              console.error(error);
                              Swal.fire('',error.error.msg, 'error');
                            }
                          );
  


  }

/*   onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    console.log('token: ', googleUser.getAuthResponse().id_token);

    this.userRegisterService.validarTokenGoogle(googleUser.getAuthResponse().id_token)
                                .subscribe(
                                  (response)=>{
                                    console.log(response);
                                  },
                                  (error) => {
                                    console.error(error);
                                    Swal.fire('',error.error.msg, 'error');
                                  }
                                );
  } */
 /*  onFailure(error) {
    console.log(error);
  } */
  renderButton() {
    gapi.signin2.render('my-signin2',{
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark'
    });
    this.startApp();
  }


  async startApp() {

      await this.userRegisterService.initGoogleApi();
      this.auth2 = this.userRegisterService.auth2;
      this.attachSignin(document.getElementById('my-signin2'));

  };

  attachSignin (element){
    this.auth2.attachClickHandler(element, {},
        (googleUser) =>{
          let token = googleUser.getAuthResponse().id_token;
          this.userRegisterService.validarTokenGoogle(token)
                .subscribe(
                  (response)=>{
                    this.ngZone.run(() =>
                      {
                        this.router.navigateByUrl('/dashboard');
                      }
                    );
                  },
                  (error) => {
                    console.error(error);
                    Swal.fire('',error, 'error');
                  }
                );
                
        }, (error) => {
          Swal.fire('',error, 'error');
        });
  }
}
