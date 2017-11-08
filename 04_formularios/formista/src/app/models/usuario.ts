export interface User  {
    id: string | number;
    nombre : string;
    apellidos: string;
    telefono: string;
}

export class UserModel implements User {
   
    constructor (public id: string | number, 
                public nombre: string, 
                public apellidos: string,
                public telefono: string) {}
}