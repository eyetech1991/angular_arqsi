import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { registar } from "./registar";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClient } from '@angular/common/http';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch'

import { RegistarService } from '../service/registar/registar.service';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private registerService: RegistarService) { }

  ngOnInit() {

  }

  registar() {
    this.loading = true;
    this.registerService.register(this.model.Username,this.model.email,this.model.password)
      .subscribe(result => {
        this.loading = false;
        if (result === true) {
            this.router.navigate(['/login']);  
        } else {
          this.error = 'Username or password is incorrect';
        }
      });
  }
  help() {
    alert("Insira os dados para aceder");
  }
  userforgotAccount() {
    alert("Contacte seu administrador de sistemas");
  }
}