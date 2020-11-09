import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipodocumento } from 'src/app/models/TipoDocumento/tipodocumento';

@Injectable({
  providedIn: 'root'
})
export class TipodocumentoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private urlTipoDocumento: string = 'http://localhost:9090/tipodoc';
  constructor(private http: HttpClient) { }
  getTipodocumentos(): Observable<Tipodocumento[]> {
    return this.http.get<Tipodocumento[]>(this.urlTipoDocumento + '/all');
  }
}
