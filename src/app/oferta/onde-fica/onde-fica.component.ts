import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OfertaService } from 'src/app/Service/oferta.service';
import { IOndeFica } from 'src/app/shared/onde-fica.interface';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertaService ]

})
export class OndeFicaComponent implements OnInit {

  public $ondeFica?: Observable<IOndeFica>

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertaService
  ) {
    this.$ondeFica = this.ofertaService.getOndeFicaOfertaPorId(
      Number.parseInt(this.route.parent?.snapshot.params['id'] ?? 0)
    )
  }

  ngOnInit(): void {}
}
