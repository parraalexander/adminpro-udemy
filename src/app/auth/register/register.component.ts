import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal  from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls:['../login/login.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

  constructor(private fb: FormBuilder, private userRegisterService : UsuarioService, private router : Router
    ,private ngZone : NgZone) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      nombre: ['alexander', Validators.required],
      email: ['parraalexander.1@gmail.com', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['1234', Validators.required],
      password2: ['1234', Validators.required],
      terms: [false, Validators.required],
    }, 
    {
      validators: this.camposIguales('password','password2')
    });
  }

  camposIguales(campo1:string, campo2:string){
    return (form: FormGroup) => {
      const campo1Item = form.get(campo1);
      const campo2Item = form.get(campo2);
      if (campo1Item.value === campo2Item.value) {
        campo2Item.setErrors(null);
      } else {
        campo2Item.setErrors({noEsIgual:true});
      }

    }
  }

  validarCampos(campo:string):boolean {
    if(this.formRegister.get(campo).invalid && this.formRegister.get(campo).dirty) {
      return false;
    } else {
      return true;
    }
  }


  passwordIguales():boolean{
    return this.formRegister.get('password2').getError('noEsIgual');
  }
  validadosTerminos(){
    if (!this.formRegister.get('terms').value && this.formRegister.get('terms').dirty) {
      return false;
    }else {
      return true;
    }
  }

  registrarCliente(){
    console.log("Enviando fomrulario....")

    this.userRegisterService.crearUsuario(this.formRegister.value)
                              .subscribe(
                                (response) => { 
                                  this.ngZone.run(() =>
                                  {
                                    this.router.navigateByUrl('/dashboard');
                                  }
                                );
                                },
                                (error) => {  
                                  Swal.fire('',error.error.msg, 'error');
                                }
                              );


    console.log("Fomrulario enviado....")
  }

}
