import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../Service/oferta.service';
import { IOferta } from '../shared/oferta.interface';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertaService ]
})
export class RestaurantesComponent implements OnInit {
  public ofertas: IOferta[] = [];

  constructor(public ofertaService: OfertaService) { }

  ngOnInit(): void {
    this.ofertaService.getOferta({categoria: 'restaurante'})
    .subscribe(
      (ofertas: IOferta[]) => this.ofertas = ofertas
    )
  }

}
