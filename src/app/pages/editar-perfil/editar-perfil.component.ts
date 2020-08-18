import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { FileuploadService } from 'src/app/services/fileupload.service';
import Swal  from 'sweetalert2'

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  formEdit: FormGroup;
  usuario:Usuario;
  foto:File;
  fotoPreview:any;

  constructor(private fb: FormBuilder, private userService: UsuarioService
    ,private fileUploadService: FileuploadService) { 
    this.usuario = userService.usuario;
  }

  ngOnInit(): void {
    this.formEdit = this.fb.group({
      nombre: [this.usuario.nombre, Validators.required],
      email: [this.usuario.email, Validators.compose([
        Validators.required, Validators.email
      ])]
    });
  }

  validarCampos(campo:string):boolean {
    if(this.formEdit.get(campo).invalid && this.formEdit.get(campo).dirty) {
      return false;
    } else {
      return true;
    }
  }

  actualizar(){
    console.log('actualizar');
    this.userService.actualizarUsuario(this.formEdit.value)
                      .subscribe(
                        () => {
                            const {nombre, email} = this.formEdit.value;
                            this.userService.usuario.nombre = nombre;
                            this.userService.usuario.email = email;
                            Swal.fire('Actualización exitosa','Datos actualizados', 'success');
                        },
                        (error) => {
                          Swal.fire('',error.error.msg, 'error');
                        }
                      );
  }

  actualizarFoto(file: File){
    if(!file){
      this.fotoPreview = null;
      return;
    }
    this.foto = file;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      this.fotoPreview = fileReader.result
    }
    

  }

  async uploadFoto() {
    console.log('llamando al servicio');
    await this.fileUploadService.subirImagen(this.foto, this.usuario.uid, 'usuarios')
                .then(
                  (img) => { 
                    this.usuario.img = img
                    Swal.fire('Actualización exitosa','Foto actualizada', 'success');
                    }
                ).catch(
                  (error) => {
                    Swal.fire('',error.error.msg, 'error');
                  }
                );
    console.log('llamo al servicio');
  }

}
