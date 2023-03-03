import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Pelicula } from 'app/modelo/pelicula';
import { Idioma } from 'app/modelo/idioma.model';
import { ConexionService } from 'app/servicio/conexion.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pelis: Pelicula[];
  idiomas: Idioma[];
  constructor(private conexion: ConexionService, private router: Router) {
    this.idiomas = [];
    this.pelis = [];
        this.pelis.push(new Pelicula(1, "Nombre Pelicula", "Descripcion Pelicula", 0));
        this.pelis.push(new Pelicula(1, "Nombre Pelicula", "Descripcion Pelicula", 0));
        this.pelis.push(new Pelicula(1, "Nombre Pelicula", "Descripcion Pelicula", 0));
        this.pelis.push(new Pelicula(1, "Nombre Pelicula", "Descripcion Pelicula", 0));
        this.pelis.push(new Pelicula(1, "Nombre Pelicula", "Descripcion Pelicula", 0));
    conexion.obtenerIdiomas().subscribe((data: Idioma[]) => {
      this.idiomas = data;
    });
    conexion.obtenerPelis().subscribe((data: Pelicula[]) => {
      this.pelis = data;
      if (this.pelis == null) {
        this.pelis = [];
        this.pelis.push(new Pelicula(1, "Nombre Pelicula", "Descripcion Pelicula", 0));
        this.pelis.push(new Pelicula(1, "Nombre Pelicula", "Descripcion Pelicula", 0));
        this.pelis.push(new Pelicula(1, "Nombre Pelicula", "Descripcion Pelicula", 0));
        this.pelis.push(new Pelicula(1, "Nombre Pelicula", "Descripcion Pelicula", 0));
        this.pelis.push(new Pelicula(1, "Nombre Pelicula", "Descripcion Pelicula", 0));
      }
    });
  }

  ngOnInit() { }

}
