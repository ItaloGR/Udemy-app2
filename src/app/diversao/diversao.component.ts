import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertaService } from '../Service/oferta.service';
import { IOferta } from '../shared/oferta.interface';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertaService]
})
export class DiversaoComponent implements OnInit {
  public ofertas: IOferta[] = [];
  public ofertasObs: Observable<IOferta[]>;

  constructor(public ofertaService: OfertaService) { 
    this.ofertasObs = this.ofertaService.getOferta({categoria: 'diversao'})
  }

  ngOnInit(): void {
    this.ofertaService.getOferta({categoria: 'diversao'})
    .subscribe(
      (ofertas: IOferta[]) => this.ofertas = ofertas
    )
  }
}
