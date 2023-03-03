import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from 'app/modelo/pelicula';
import { Idioma } from 'app/modelo/idioma.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private url = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  obtenerPelis(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.url + "peliculas");
  }

  obtenerIdiomas(): Observable<Idioma[]> {
    return this.http.get<Idioma[]>(this.url + "idiomas");
  }

}
