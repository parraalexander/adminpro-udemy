import { environment } from 'src/environments/environment';

const BASE_URL = environment.BASE_URL;

export class Usuario {
    constructor(
                public uid:string,
                public nombre:string,
                public email:string,
                public passsword?:string,
                public img?:string,
                public role?:string,
                public google?:boolean){

    }

    get imgUser(){

        if (!this.img) {
            return 'http://localhost:3005/api/upload/usuarios/no-image'
        }
        if (this.img.includes('https')){
            return this.img;
        } else {
            return `${BASE_URL}upload/usuarios/${this.img}`
        }
    }
}