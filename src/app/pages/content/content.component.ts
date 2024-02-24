import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: [
    './content.component.css',
    './content.mobile.component.css',
    './content.tablet.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = '';
  contentTitle:string = '';
  contentDescription:string = '';

  //criando uma propriedade privada que só vai usar dentro dessa class
  private id:string | null = "0" ;//pegar o parametro do rota atual


  //para pegar o id, lembrando que se vc colocou maiúsculo, quado vem em json o mesmo está minúsculo;
  constructor(
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id"));//vai retornar o valor do parâmetro da url

    this.setValuesToComponent(this.id);
  }

  //criando uma função  para  verificar se tem um id ou não em dataFake
  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
