import { Component, OnInit } from '@angular/core';

import { Receita } from '../models/receita';
import { ReceitasService } from '../service/receitas/receitas.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {
  receitas: Receita[] = [];
  constructor(private receitaService: ReceitasService) { }

  ngOnInit() {
    this.receitaService.getReceitas()
      .subscribe(receitas => {
        this.receitas = receitas;
      })
  }

  help(){
    alert("Local que permitirá gerir receitas e suas dependencias");
  }
}
