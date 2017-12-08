import { Component, OnInit } from '@angular/core';

import { Receita } from '../../models/receita';
import { ReceitasService } from '../../service/receitas/receitas.service';


@Component({
  selector: 'app-receitas-listar',
  templateUrl: './receitas-listar.component.html',
  styleUrls: ['./receitas-listar.component.css']
})
export class ReceitasListarComponent implements OnInit {
  receitas: Receita[] = [];
  constructor(private receitaService: ReceitasService) { }

  ngOnInit() {
    this.receitaService.getReceitas()
      .subscribe(receitas => {
        this.receitas = receitas;
      })
    //alert(localStorage.userInfo.token);
  }

  help() {
    alert("Local que permitirá gerir receitas e suas dependencias");
  }

}
