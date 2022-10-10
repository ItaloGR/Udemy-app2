import { Injectable } from "@angular/core";
import { IOferta } from "../shared/oferta.interface";
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL_COMO_USAR, URL_OFERTA, URL_ONDE_FICA } from "../app.api"
import { Observable } from "rxjs";
import { IComoUsar } from "../shared/como-usar.interface";
import { IOndeFica } from "../shared/onde-fica.interface";

@Injectable()
export class OfertaService {

  constructor(private http: HttpClient) {}
  getOferta(filtro: Partial<IOferta>): Observable<IOferta[]>{
    var query = '?';
    query += filtro.destaque != null ? `destaque=${filtro.destaque}`: '';
    query += filtro.categoria != null ? `categoria=${filtro.categoria}` : '';
    
    return this.http.get<IOferta[]>(`${URL_OFERTA}${query}`)
  }

  getOfertaPorId(id: number): Observable<IOferta>{
    return this.http.get<IOferta>(`${URL_OFERTA}/${id}/`);
  }

  getComoUsarOfertaPorId(id: number): Observable<IComoUsar>{
    return this.http.get<IComoUsar>(`${URL_COMO_USAR}/${id}/`);
  }
  
  getOndeFicaOfertaPorId(id: number): Observable<IOndeFica>{
    return this.http.get<IOndeFica>(`${URL_ONDE_FICA}/${id}/`);
  }
}

