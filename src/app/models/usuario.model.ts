
export class Usuario {
    constructor(
                public nombre:string,
                public email:string,
                public passsword?:string,
                public img?:string,
                public role?:string,
                public google?:boolean){

    }
}