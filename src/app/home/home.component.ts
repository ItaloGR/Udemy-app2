import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../Service/oferta.service';
import { IOferta } from '../shared/oferta.interface' 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertaService ]
})
export class HomeComponent implements OnInit {
  public ofertas: IOferta[] = [];

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
    // this.ofertaService.getPromise()
    // .then((ofertas: IOferta[]) => this.ofertas = ofertas)
    // .catch((erro) => console.log(erro))

    this.ofertaService.getOferta({destaque: true})
    .subscribe(
      (ofertas: IOferta[]) => this.ofertas = ofertas
    )
  }

}
