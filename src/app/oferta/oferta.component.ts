import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { OfertaService } from '../Service/oferta.service';
import { IOferta } from '../shared/oferta.interface';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertaService ]
})
export class OfertaComponent implements OnInit {

  public $oferta?: Observable<IOferta>;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertaService
  ){}

  ngOnInit(): void {
    this.$oferta = this.ofertaService.getOfertaPorId(
      Number.parseInt(this.route.snapshot.params['id']??0)
    )
  }

}
