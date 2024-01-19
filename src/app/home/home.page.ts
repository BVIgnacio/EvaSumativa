import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  noticias=[
    {
      Titulo:"NOTICIA 1",
      DescrNot:"DESCRIPCION DE LA NOTICIA UNO CON COMPONENTES REUTILIZABLES :)",
      imag:"../../assets/Noticia1.jpg"
    },
    {
      Titulo:"NOTICIA 2",
      DescrNot:"DESCRIPCION DE LA NOTICIA DOS CON COMPONENTES REUTILIZABLES :)",
      imag:"../../assets/Noticia 2.jpg"
    },
    {
      Titulo:"NOTICIA 3",
      DescrNot:"DESCRIPCION DE LA NOTICIA TRES CON COMPONENTES REUTILIZABLES :)",
      imag:"../../assets/Noticia 3.jpg"
    },
    {
      Titulo:"NOTICIA 4",
      DescrNot:"DESCRIPCION DE LA NOTICIA CUATRO CON COMPONENTES REUTILIZABLES :)",
      imag:"../../assets/Noticia 4.jpg"
    },
    {
      Titulo:"NOTICIA 5",
      DescrNot:"DESCRIPCION DE LA NOTICIA CINCO CON COMPONENTES REUTILIZABLES :)",
      imag:"../../assets/Noticia 5.jpg"
    },
    {
      Titulo:"NOTICIA 6",
      DescrNot:"DESCRIPCION DE LA NOTICIA SEIS CON COMPONENTES REUTILIZABLES :)",
      imag:"../../assets/Noticia 6.jpg"
    },
    
  ]
}
