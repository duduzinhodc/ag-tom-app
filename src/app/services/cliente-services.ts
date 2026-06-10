import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    getClientes{} : Observable<Cliente[]>{
        return null;
    }

}