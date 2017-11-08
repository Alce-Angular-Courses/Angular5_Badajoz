export interface Printer  {
    id: string | number;
    modelo : string;
    tipo: string;
}

export class PrinterModel implements Printer {
   
    constructor (public id: string | number, 
                public modelo : string, 
                public tipo: string) {}
}
