import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})


export class FileuploadService {

  constructor() { }

  get token():string {
    return localStorage.getItem('token') || '';
  }

  async subirImagen(
    file: File,
    id : string,
    tipo: 'usuarios' | 'hospitales' | 'medicos'
  ) {
    

     try {
      const token = this.token;
      const formData = new FormData();
      formData.append('imagen', file);
      console.log(formData);
      const url = `${ BASE_URL}upload/${ tipo }/${ id }`
       const resp = await fetch(url,{
        method:"PUT",
        headers: {
            'x-token':token
          },
        body: formData
      } );
       const dataresponse = await resp.json();
       if(dataresponse.ok) {
        return dataresponse.name;
       } else {
         return false;
       }
     } catch (error) {
       console.log('Ocurrio un error al momento de subir la imagen', error);
       return false;
       
     }


  }
}
