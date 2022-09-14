import { Injectable } from "@angular/core";
import { IOferta } from "../shared/oferta.interface";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class OfertaService {

  private url: string = environment.baseUrl

  constructor(private http: HttpClient) {}

  getPromise(): Promise<IOferta[]>{
    return new Promise((resolve, reject) => {
        this.http.get<IOferta[]>(this.url + 'ofertas?destaque=true' ).subscribe(
          (retorno: IOferta[]) => resolve(retorno)
        )
    })
  }

  get(): Observable<IOferta[]>{
    return this.http.get<IOferta[]>(this.url + 'ofertas?destaque=true')
  }

  getOfertas(): Array<IOferta> {
    let ofertas = [
      {
        id: 1,
        categoria: "restaurante",
        titulo: "Super Burger",
        descricao_oferta: "Rodízio de Mini-hamSbúrger com opção de entrada.",
        anunciante: "Original Burger",
        valor: 29.90,
        destaque: true,
        imagens: [
          { url: "/assets/ofertas/1/img1.jpg" },
          { url: "/assets/ofertas/1/img2.jpg" },
          { url: "/assets/ofertas/1/img3.jpg" },
          { url: "/assets/ofertas/1/img4.jpg" }
        ]
      },
      {
        id: 2,
        categoria: "restaurante",
        titulo: "Cozinha Mexicana",
        descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
        anunciante: "Mexicana",
        valor: 32.90,
        destaque: true,
        imagens: [
          { url: "/assets/ofertas/2/img1.jpg" },
          { url: "/assets/ofertas/2/img2.jpg" },
          { url: "/assets/ofertas/2/img3.jpg" },
          { url: "/assets/ofertas/2/img4.jpg" }
        ]

      },
      {
        id: 4,
        categoria: "diversao",
        titulo: "Estância das águas",
        descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
        anunciante: "Estância das águas",
        valor: 31.90,
        destaque: true,
        imagens: [
          { url: "/assets/ofertas/3/img1.jpg" },
          { url: "/assets/ofertas/3/img2.jpg" },
          { url: "/assets/ofertas/3/img3.jpg" },
          { url: "/assets/ofertas/3/img4.jpg" },
          { url: "/assets/ofertas/3/img5.jpg" },
          { url: "/assets/ofertas/3/img6.jpg" }
        ]
      }
    ]
    return ofertas;
  }
}

