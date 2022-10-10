import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OfertaService } from 'src/app/Service/oferta.service';
import { IComoUsar } from 'src/app/shared/como-usar.interface';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertaService]
})
export class ComoUsarComponent implements OnInit {

  public $comoUsar?: Observable<IComoUsar>;

  constructor(private route: ActivatedRoute,
    private ofertaService: OfertaService
  ) {}

  ngOnInit(): void {
    this.$comoUsar = this.ofertaService.getComoUsarOfertaPorId(
      Number.parseInt(this.route.parent?.snapshot.params['id'] ?? 0)
    )
  }

}
