import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../model/cliente";

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    constructor(private http: HttpClient){}

    getClientes() : Observable<Cliente[]>{
        return this.http.get<Cliente[]>("");
    }

    getCliente(id: String) : Observable<Cliente>{
        return this.http.get<Cliente>("");
    }


}